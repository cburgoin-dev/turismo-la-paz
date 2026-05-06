import { createContext, useContext, useEffect, useState } from 'react';
import { AppState } from 'react-native';
import { placesByType } from '../data';
import { useLocation } from '../location/LocationProvider';
import { PlaceType, PlaceWithDistance } from '../types/navigation';
import { formatTime, getDistanceValue, getTravelTimeFromKm } from '../utils/location';

type PlacesContextType = {
    getPlaces: (type: PlaceType) => PlaceWithDistance[];
    isReady: boolean;
    isRefreshing: boolean;
    refreshPlaces: () => Promise<void>;
};

const PlacesContext = createContext<PlacesContextType>({
    getPlaces: () => [],
    isReady: false,
    isRefreshing: false,
    refreshPlaces: async () => {},
});

export function PlacesProvider({ children }: { children: React.ReactNode }) {
    const { location, loading: locationLoading } = useLocation();

    const [placesMap, setPlacesMap] = useState<Record<PlaceType, PlaceWithDistance[]>>({
        beaches: [],
        museums: [],
        viewpoints: [],
        experiences: [],
    });

    const [isReady, setIsReady] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [lastUpdated, setLastUpdated] = useState<number | null>(null);

    function getPlaces(type: PlaceType) {
        return placesMap[type];
    }

    function computePlaces(currentLocation: { latitude: number; longitude: number } | null) {
        const result: Record<PlaceType, PlaceWithDistance[]> = {
            beaches: [],
            museums: [],
            viewpoints: [],
            experiences: [],
        };
    
        (Object.keys(placesByType) as PlaceType[]).forEach((type) => {
            const base = placesByType[type];
    
            const computed = base.map((p) => {
                if (p.useFallbackOnly || !currentLocation) {
                    return {
                        ...p,
                        distanceValue: p.fallbackMinutes,
                        distance: formatTime(p.fallbackMinutes),
                        showCity: true,
                    };
                }
    
                const km = getDistanceValue(currentLocation, p.coordinates);
                const minutes = getTravelTimeFromKm(km);
    
                return {
                    ...p,
                    distanceValue: minutes,
                    distance: formatTime(minutes),
                    showCity: false,
                };
            });
    
            result[type] = computed.sort(
                (a, b) => a.distanceValue - b.distanceValue
            );
        });
    
        return result
    }

    async function refreshPlaces() {
        setIsRefreshing(true);

        const result = computePlaces(location);

        setPlacesMap(result);
        setLastUpdated(Date.now());

        setIsRefreshing(false);
    }

    useEffect(() => {
        if (locationLoading) return;

        const result = computePlaces(location);

        setPlacesMap(result);
        setIsReady(true);
        setLastUpdated(Date.now());

    }, [location, locationLoading]);

    useEffect(() => {
        let appState = AppState.currentState;

        const subscription = AppState.addEventListener('change', (nextState) => {
            if (appState.match(/inactive|background/) && nextState === 'active') {

                const now = Date.now();

                if (!lastUpdated || now - lastUpdated > 15000) {
                    refreshPlaces();
                }
            }

            appState = nextState;
        });

        return () => subscription.remove();
    }, [lastUpdated]);

    return (
        <PlacesContext.Provider value={{ getPlaces, isReady, isRefreshing, refreshPlaces }}>
            {children}
        </PlacesContext.Provider>
    );
}

export function usePlaces() {
    return useContext(PlacesContext);
}