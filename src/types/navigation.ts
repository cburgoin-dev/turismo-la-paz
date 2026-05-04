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

export type HighlightKey = 
    | 'parking'
    | 'entry'
    | 'difficulty'

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

export type PlaceType = 'beaches' | 'museums' | 'viewpoints';

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
    };
    Places: {
        placeType: PlaceType;
    };
    Detail: { place: PlaceWithDistance }
}