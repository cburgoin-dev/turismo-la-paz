import { Ionicons } from '@expo/vector-icons';

import {
    HighlightKey,
    ItemTypeKey
} from '../types/item';

// ITEM TYPE ICONS

export const TYPE_ICONS: Record<
    ItemTypeKey,
    keyof typeof Ionicons.glyphMap
> = {
    quiet_scenic: 'leaf',
    lively_popular: 'people',
    urban_accessible: 'business',
    calm_family: 'happy',

    indoor_educational: 'school',
    cultural_historic: 'library',
    interactive_family: 'people',

    scenic_hiking: 'map',
    sunset_scenic: 'partly-sunny',
    elevated_views: 'eye',

    ocean_adventure: 'boat',
    wildlife_experience: 'fish',
    cultural_experience: 'compass',
};

export function getTypeIcon(type: ItemTypeKey) {
    return TYPE_ICONS[type];
}

// HIGHLIGHT ICONS

export const HIGHLIGHT_ICONS: Record<
    HighlightKey,
    keyof typeof Ionicons.glyphMap
> = {
    parking: 'car',
    entry: 'ticket',
    viewpoint: 'eye',
    experience: 'compass',
};

export function getHighlightIcon(key: HighlightKey) {
    return HIGHLIGHT_ICONS[key];
}