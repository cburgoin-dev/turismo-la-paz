import { ImageSourcePropType } from 'react-native';
import { CategoryKey } from '../config/categoryConfig';

export type ImageCredit = {
    author: string;
    source: string;
    location?: string | null;
}

export type ImageAsset = {
    source: ImageSourcePropType;
    credit?: ImageCredit | string | null;
};

export type PlaceTypeKey =
    | 'quiet_scenic'
    | 'lively_popular'
    | 'urban_accessible'
    | 'calm_family'
    | 'indoor_educational'
    | 'cultural_historic'
    | 'interactive_family'
    | 'scenic_hiking'
    | 'sunset_scenic'
    | 'elevated_views'
    | 'ocean_adventure'
    | 'wildlife_experience'
    | 'cultural_experience'

export type HighlightKey = 
    | 'parking'
    | 'entry'
    | 'difficulty'
    | 'experience'

export type ExperienceDuration = 
    | 'half_day'
    | 'full_day'

export type Place = {
    id: string;
    name: string;
    displayNameKey: string;
    aliases: string[];

    locationKey: string;

    categories: CategoryKey[];
    tags: string[];

    priceLevel: number;

    descriptionKey: string;
    images: ImageAsset[];

    fallbackMinutes: number;
    useFallbackOnly: boolean;

    type: PlaceTypeKey;

    duration?: ExperienceDuration;
    durationColor?: string;

    highlight: {
        key: HighlightKey;
        value: string;
    }

    tipKey: string;
    quickTipKey: string;
    quickTipColor: string;
    
    coordinates: {
        latitude: number;
        longitude: number;
    };
};

export type PlaceType = 
| 'beaches' 
| 'museums' 
| 'viewpoints'
| 'experiences'

export type PlaceWithDistance = Place & {
    distanceValue: number | null;
    distance: string;
    showCity?: boolean;
}

export type RootStackParamList = {
    Home: undefined;
    PlaceType: undefined;
    Categories: {
        placeType: PlaceType;
    }
    Recommendations: { 
        category: CategoryKey;
        placeType: PlaceType;
        preloadedPlaces?: PlaceWithDistance[];
    };
    Places: {
        placeType: PlaceType;
        preloadedPlaces?: PlaceWithDistance[];
    };
    Detail: { place: PlaceWithDistance }
}