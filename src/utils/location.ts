import * as Location from 'expo-location';
import { Place } from '../types/navigation';


export async function getUserLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        throw new Error('Permission denied');
    }

    const lastKnown = await Location.getLastKnownPositionAsync();

    if (lastKnown) {
        return {
            latitude: lastKnown.coords.latitude,
            longitude: lastKnown.coords.longitude,
        };
    }

    const location = await Location.getCurrentPositionAsync({})

    return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
    };
}

export function getDistanceInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c
}

export function getTravelTimeFromKm(distanceKm: number) {
    const CORRECTION_FACTOR = 1.35;
    const SPEED_KMH = 45;

    const adjustedDistance = distanceKm * CORRECTION_FACTOR

    return Math.round((adjustedDistance / SPEED_KMH) * 60)
}

export function getDistanceValue(
    userLocation: { latitude: number; longitude: number },
    placeCoordinates: { latitude: number, longitude: number }
) {
    return getDistanceInKm(
        userLocation.latitude,
        userLocation.longitude,
        placeCoordinates.latitude,
        placeCoordinates.longitude
    );
}

export function formatTime(mins: number) {
    if (mins >= 60) {
        const h = Math.floor(mins / 60);
        const m = mins % 60;

        if (m === 0) return `~ ${h} h`;
        return `~ ${h}h ${m}min`;
    }

    return `~ ${mins} min`;
}

export async function preparePlaces(base: Place[]) {
    let userLocation = null;

    try {
        userLocation = await getUserLocation();
    } catch (e) {
        console.warn('Location error', e);
    }

    const withDistance = base.map(p => {
        if (p.useFallbackOnly || !userLocation) {
            return {
                ...p,
                distanceValue: p.fallbackMinutes,
                distance: formatTime(p.fallbackMinutes),
            };
        }

        const km = getDistanceValue(userLocation, p.coordinates);
        const minutes = getTravelTimeFromKm(km);

        return {
            ...p,
            distanceValue: minutes,
            distance: formatTime(minutes),
        };
    });

    return withDistance.sort((a, b) => a.distanceValue - b.distanceValue);
}