import * as Location from 'expo-location';
import { createContext, useContext, useEffect, useState } from 'react';

type LocationType = {
    latitude: number;
    longitude: number;
};

const LocationContext = createContext<{
    location: LocationType | null;
    loading: boolean;
}>({
    location: null,
    loading: true,
});

export function LocationProvider({ children }: { children: React.ReactNode }) {
    const [location, setLocation] = useState<LocationType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLocation() {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    setLoading(false);
                    return;
                }

                const lastKnown = await Location.getLastKnownPositionAsync();

                if (lastKnown) {
                    setLocation({
                        latitude: lastKnown.coords.latitude,
                        longitude: lastKnown.coords.longitude,
                    });
                } else {
                    const current = await Location.getCurrentPositionAsync({});
                    setLocation({
                        latitude: current.coords.latitude,
                        longitude: current.coords.longitude,
                    });
                }
            } catch (e) {
                console.warn('Location error', e);
            } finally {
                setLoading(false);
            }
        }

        loadLocation();
    }, []);

    return (
        <LocationContext.Provider value={{ location, loading }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    return useContext(LocationContext);
}