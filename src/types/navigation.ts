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
    images: any[];

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

export type PlaceWithDistance = Place & {
    distanceValue: number | null;
    distance: string;
}

export type RootStackParamList = {
    Categories: undefined;
    Recommendations: { category: string };
    Places: undefined;
    Detail: { place: Place }
}