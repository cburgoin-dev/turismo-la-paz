import { Ionicons } from '@expo/vector-icons';
import { HighlightKey, PlaceTypeKey } from '../types/navigation';

export const TYPE_ICONS: Record<
    PlaceTypeKey,
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
}

export const HIGHLIGHT_ICONS: Record<
    HighlightKey,
    keyof typeof Ionicons.glyphMap
>= {
    parking: 'car',
    entry: 'ticket',
    difficulty: 'trail-sign',
}