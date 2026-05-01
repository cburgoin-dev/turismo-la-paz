import { Place, PlaceType } from '../types/navigation';
import { beaches } from './beaches';
import { museums } from './museums';
import { viewpoints } from './viewpoints';

export const placesByType: Record<PlaceType, Place[]> = {
    beaches,
    museums,
    viewpoints,
};

