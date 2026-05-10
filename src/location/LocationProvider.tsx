import * as Location from 'expo-location';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserLocation } from '../types/location';

type LocationContextType = {
    location: UserLocation | null;
    loading: boolean;
};

const LocationContext = createContext<LocationContextType>({
    location: null,
    loading: true,
});

type Props = {
    children: React.ReactNode;
};

export function LocationProvider({ children }: Props) {
    const [location, setLocation] = useState<UserLocation | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLocation() {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    setLoading(false);
                    return;
                }

                // Use cached location first for faster startup
                const lastKnown = await Location.getLastKnownPositionAsync();

                if (lastKnown) {
                    setLocation({
                        latitude: lastKnown.coords.latitude,
                        longitude: lastKnown.coords.longitude,
                    });
                } else {
                    // Fallback to real-time GPS location
                    const current = await Location.getCurrentPositionAsync({});
                    setLocation({
                        latitude: current.coords.latitude,
                        longitude: current.coords.longitude,
                    });
                }
            } catch (error) {
                console.warn('Location error', error);
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
    );
}

export function useLocation() {
    return useContext(LocationContext);
}