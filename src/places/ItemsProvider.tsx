import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';
import { AppState } from 'react-native';

import { itemsByGroup } from '../data';
import { useLocation } from '../location/LocationProvider';
import { Item, ItemGroup, ItemWithDistance } from '../types/item';
import { UserLocation } from '../types/location';
import { formatTime, getDistanceValue, getTravelTimeFromKm } from '../utils/location';

const REFRESH_INTERVAL = 15000;

type ItemsContextType = {
    getItems: (group: ItemGroup) => ItemWithDistance[];
    isReady: boolean;
    isRefreshing: boolean;
    refreshItems: () => Promise<void>;
};

const ItemsContext = createContext<ItemsContextType>({
    getItems: () => [],
    isReady: false,
    isRefreshing: false,
    refreshItems: async () => {},
});

const EMPTY_ITEMS_MAP: Record<ItemGroup, ItemWithDistance[]> = {
    beaches: [],
    museums: [],
    viewpoints: [],
    experiences: [],
};

type Props = {
    children: React.ReactNode;
};

export function ItemsProvider({ children }: Props) {
    const { location, loading: locationLoading } = useLocation();

    const [itemsMap, setItemsMap] = useState<Record<ItemGroup, ItemWithDistance[]>>(
        EMPTY_ITEMS_MAP
    );

    const [isReady, setIsReady] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [lastUpdated, setLastUpdated] = useState<number | null>(null);

    function getItems(group: ItemGroup) {
        return itemsMap[group];
    }

    function buildItemWithDistance(
        item: Item,
        currentLocation: UserLocation | null
    ): ItemWithDistance {
        if (item.useFallbackOnly || !currentLocation) {
            return {
                ...item,
                distanceValue: item.fallbackMinutes,
                distance: formatTime(item.fallbackMinutes),
                showCity: true,
            };
        }

        const km = getDistanceValue(currentLocation, item.coordinates);
        const minutes = getTravelTimeFromKm(km);

        return {
            ...item,
            distanceValue: minutes,
            distance: formatTime(minutes),
            showCity: false,
        };
    }

    // Compute travel time and distance metadata for all items
    function computeItems(currentLocation: UserLocation | null) {
        const result: Record<ItemGroup, ItemWithDistance[]> =
            structuredClone(EMPTY_ITEMS_MAP);
    
        (Object.keys(itemsByGroup) as ItemGroup[]).forEach((group) => {
            const base = itemsByGroup[group];
    
            const computed = base.map((item: Item) =>
                buildItemWithDistance(item, currentLocation)
            );
    
            result[group] =
                group === 'experiences'
                    ? computed
                    : computed.sort(
                          (
                              a: ItemWithDistance,
                              b: ItemWithDistance
                          ) => {
                              if (a.distanceValue === null) return 1;
                              if (b.distanceValue === null) return -1;
    
                              return a.distanceValue - b.distanceValue;
                          }
                      );
        });
    
        return result;
    }

    async function refreshItems() {
        try {
            setIsRefreshing(true);

            const result = computeItems(location);
    
            setItemsMap(result);
            setLastUpdated(Date.now());
        } finally {
            setIsRefreshing(false);
        }
    }

    useEffect(() => {
        if (locationLoading) return;

        const result = computeItems(location);

        setItemsMap(result);
        setIsReady(true);
        setLastUpdated(Date.now());

    }, [location, locationLoading]);

    useEffect(() => {
        let appState = AppState.currentState;

        const subscription = AppState.addEventListener('change', (nextState) => {
            if (appState.match(/inactive|background/) && nextState === 'active') {

                const now = Date.now();

                if (!lastUpdated || now - lastUpdated > REFRESH_INTERVAL) {
                    refreshItems();
                }
            }

            appState = nextState;
        });

        return () => subscription.remove();
    }, [lastUpdated]);

    return (
        <ItemsContext.Provider value={{ getItems, isReady, isRefreshing, refreshItems }}>
            {children}
        </ItemsContext.Provider>
    );
}

export function useItems() {
    return useContext(ItemsContext);
}