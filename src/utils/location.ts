import { UserLocation } from "../types/location";

const EARTH_RADIUS_KM = 6371;

const ROAD_DISTANCE_FACTOR = 1.35;
const AVERAGE_SPEED_KMH = 45;

// DISTANCE
export function getDistanceInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) {
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
             Math.cos(lat2 * Math.PI / 180) *
             Math.sin(dLon / 2) ** 2;

    const c = 
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return EARTH_RADIUS_KM * c;
}

export function getDistanceValue(
    userLocation: UserLocation,
    itemCoordinates: { 
        latitude: number, 
        longitude: number 
    }
) {
    return getDistanceInKm(
        userLocation.latitude,
        userLocation.longitude,
        itemCoordinates.latitude,
        itemCoordinates.longitude
    );
}

// TRAVEL TIME
export function getTravelTimeFromKm(distanceKm: number) {
    const adjustedDistance = 
        distanceKm * ROAD_DISTANCE_FACTOR;

    return Math.round(
        (adjustedDistance / AVERAGE_SPEED_KMH) * 60
    );
}

export function formatTime(minutes: number) {
    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        if (remainingMinutes === 0) {
            return `~ ${hours} h`;
        }

        return `~ ${hours}h ${remainingMinutes}min`;
    }

    return `~ ${minutes} min`;
}