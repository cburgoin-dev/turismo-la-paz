import * as Location from 'expo-location';

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

export function getTravelTime(distanceKm: number) {
    const SPEED_KMH = 40;

    const minutes = Math.round((distanceKm / SPEED_KMH) * 60)

    return `${minutes} min away`;
}

export function getDistanceText(
    userLocation: { latitude: number; longitude: number},
    beachCoordinates: { latitude: number; longitude: number }
) {
    const distanceKm = getDistanceInKm(
        userLocation.latitude,
        userLocation.longitude,
        beachCoordinates.latitude,
        beachCoordinates.longitude
    );

    return getTravelTime(distanceKm);
}