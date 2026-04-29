import { ImageSourcePropType } from 'react-native';

export type PlaceImage = {
    source: ImageSourcePropType;
    credit?: string | null;
};

export type Place = {
    id: string;
    name: string;
    displayNameKey: string;
    aliases: string[];

    locationKey: string;

    categories: string[];
    tags: string[];

    priceLevel: number;

    descriptionKey: string;
    images: PlaceImage[];

    fallbackMinutes: number;

    type: string;
    parking: string;

    tipKey: string;
    quickTipKey: string;
    quickTipColor: string;
    
    coordinates: {
        latitude: number;
        longitude: number;
    };
};

export type PlaceType = 'beaches' | 'museums' | 'galleries';

export type PlaceWithDistance = Place & {
    distanceValue: number | null;
    distance: string;
}

export type RootStackParamList = {
    Home: undefined;
    PlaceType: undefined;
    Categories: {
        placeType: PlaceType;
    }
    Recommendations: { 
        category: string;
        placeType: PlaceType;
    };
    Places: {
        placeType: PlaceType;
    };
    Detail: { place: Place }
}