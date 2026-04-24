import { ImageSourcePropType } from 'react-native';

export type Beach = {
    id: string;
    name: string;
    location: string;
    category: string;
    description: string;
    images: ImageSourcePropType[];
    distance: string;
    type: string;
    parking: string;
    tip: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
};

export type RootStackParamList = {
    Home: undefined;
    Recommendations: { category: string };
    Detail: { beach: Beach }
}