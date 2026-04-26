export type Place = {
    id: string;
    name: string;
    displayName: string;
    aliases: string[];
    location: string;

    categories: string[];
    tags: string[];

    priceLevel: number;

    description: string;
    images: any[];

    distance: string;
    type: string;
    parking: string;

    tip: string;
    quickTip: string;
    quickTipColor: string;
    
    coordinates: {
        latitude: number;
        longitude: number;
    };
};

export type PlaceWithDistance = Place & {
    distanceValue: number | null;
}

export type RootStackParamList = {
    Categories: undefined;
    Recommendations: { category: string };
    Places: undefined;
    Detail: { place: Place }
}