import { PLACE_COLORS } from "../config/placeColors";
import { Place } from "../types/navigation";

export const experiences: Place[] = [
    {
        id: '1',
        name: 'Sea Lion Snorkeling',
        displayNameKey: 'sea_lions.name',
        aliases: [
            'Sea Lion Tour',
            'Snorkeling with Sea Lions',
            'Los Islotes Tour',
        ],

        locationKey: 'sea_lions.location',

        categories: ['adventure', 'social'],
        tags: ['activities', 'boat_tours', 'scenic'],

        priceLevel: 3,

        descriptionKey: 'sea_lions.description',

        images: [
            {
                source: require('../../assets/images/experiences/sea-lions/1.webp'),
                credit: {
                    author: 'Elianne Dipp',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sea-lions/2.webp'),
                credit: {
                    author: 'Elianne Dipp',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sea-lions/3.webp'),
                credit: {
                    author: 'Elianne Dipp',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sea-lions/4.webp'),
                credit: {
                    author: 'Josué Rodríguez',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., México',
                },
            },
        ],

        fallbackMinutes: 35,
        useFallbackOnly: false,

        type: 'wildlife_experience',

        duration: 'full_day',
        durationColor: PLACE_COLORS.DEEP_WATER,

        highlight: {
            key: 'experience',
            value: 'wildlife',
        },

        tipKey: 'sea_lions.tip',
        quickTipKey: 'sea_lions.quickTip',

        quickTipColor: PLACE_COLORS.DEEP_WATER,

        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    }
]