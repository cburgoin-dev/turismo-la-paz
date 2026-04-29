import { Place, PlaceType } from '../types/navigation';
import { beaches } from './beaches';

export const placesByType: Record<PlaceType, Place[]> = {
    beaches: beaches,
    museums: [],
    galleries: [],
};

