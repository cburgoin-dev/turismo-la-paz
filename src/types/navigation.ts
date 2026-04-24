
export type Beach = {
    id: string;
    name: string;
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

export type RootStackParamList = {
    Home: undefined;
    Recommendations: { category: string };
    Detail: { beach: Beach }
}