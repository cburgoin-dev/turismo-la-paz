import { useEffect, useMemo, useState } from 'react';
import { placesByType } from '../data';
import { useT } from '../translations';
import { PlaceType, PlaceWithDistance } from '../types/navigation';
import { formatTime, getDistanceValue, getTravelTimeFromKm, getUserLocation } from '../utils/location';

export function usePlaces(placeType: PlaceType, searchQuery?: string) {
    const t = useT();

    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLocation() {
            try {
                const loc = await getUserLocation();
                setUserLocation(loc);
            } catch (e) {
                console.warn('Location error', e);
            } finally {
                setLoading(false);
            }
        }

        loadLocation();
    }, []);

    const places = useMemo(() => {
        let base = placesByType[placeType];

        if (searchQuery && searchQuery.trim().length > 0) {
            const q = searchQuery.toLowerCase();

            base = base.filter(p => 
                p.name.toLowerCase().includes(q) || 
                p.aliases.some(a => a.toLowerCase().includes(q))
            );
        }

        const withDistance: PlaceWithDistance[] = base.map(p => {

            if (p.useFallbackOnly) {
                return {
                    ...p,
                    distanceValue: p.fallbackMinutes,
                    distance: formatTime(p.fallbackMinutes),
                    showCity: true,
                };
            }
        
            if (!userLocation) {
                return {
                    ...p,
                    distanceValue: p.fallbackMinutes,
                    distance: formatTime(p.fallbackMinutes),
                    showCity: true,
                };
            }
        
            const km = getDistanceValue(userLocation, p.coordinates);
            const minutes = getTravelTimeFromKm(km);
        
            return {
                ...p,
                distanceValue: km,
                distance: formatTime(minutes),
                showCity: false,
            };
        });

        return withDistance.sort((a, b) => {
            if (a.distanceValue === null) return 1;
            if (b.distanceValue === null) return -1;
            return a.distanceValue - b.distanceValue;
        });
    }, [placeType, searchQuery, userLocation]);

    return {
        places,
        loading,
    };
}