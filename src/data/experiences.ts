import { PLACE_COLORS } from "../config/placeColors";
import { Place } from "../types/navigation";

export const experiences: Place[] = [
    {
        id: '1',
        name: 'Sea Lion Snorkeling',
        displayNameKey: 'sea_lions.name',
        aliases: ['Sea Lion Tour', 'Snorkeling with Sea Lions', 'Los Islotes Tour'],

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

        fallbackMinutes: 15,
        useFallbackOnly: false,

        type: 'wildlife_experience',

        duration: 'full_day',
        durationColor: PLACE_COLORS.DEEP_WATER,

        highlight: {
            key: 'experience',
            value: 'wildlife',
        },

        tipKey: 'sea_lions.tip',

        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '2',
        name: 'Whale Shark Experience',
        displayNameKey: 'whale_shark.name',
    
        aliases: ['Whale Shark Tour', 'Swimming with Whale Sharks', 'Whale Shark Snorkeling'],
    
        locationKey: 'whale_shark.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'boat_tours'],
    
        priceLevel: 3,
    
        descriptionKey: 'whale_shark.description',
    
        images: [
            {
                source: require('../../assets/images/experiences/whale-shark/1.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-shark/2.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-shark/3.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-shark/4.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
        ],
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'wildlife_experience',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.DEEP_WATER,
    
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },
    
        tipKey: 'whale_shark.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '3',
        name: 'Espiritu Santo Boat Tour',
        displayNameKey: 'espiritu_santo.name',
    
        aliases: ['Espiritu Santo Tour', 'Island Boat Tour','Espiritu Santo Island'],
    
        locationKey: 'espiritu_santo.location',
    
        categories: ['social', 'relax'],
        tags: ['boat_tours', 'scenic', 'activities'],
    
        priceLevel: 3,
    
        descriptionKey: 'espiritu_santo.description',
    
        images: [
            {
                source: require('../../assets/images/experiences/espiritu-santo/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/5.webp'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'island',
        },
    
        tipKey: 'espiritu_santo.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '4',
        name: 'Whale Watching',
        displayNameKey: 'whale_watching.name',
    
        aliases: [
            'Whale Watching Tour',
            'Gray Whale Watching',
            'Whale Watching Boat Tour',
        ],
    
        locationKey: 'whale_watching.location',
    
        categories: ['relax', 'social'],
        tags: ['boat_tours', 'scenic', 'activities'],
    
        priceLevel: 3,
    
        descriptionKey: 'whale_watching.description',
    
        images: [
            {
                source: require('../../assets/images/experiences/whale-watching/1.webp'),
                credit: {
                    author: 'Carlos Reyes',
                    source: 'Unsplash',
                    location: 'BCS, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-watching/2.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'El Pescador, B.C., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-watching/3.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'El Pescador, B.C., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-watching/4.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'El Pescador, B.C., Mexico',
                },
            },
        ],
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'wildlife_experience',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },
    
        tipKey: 'whale_watching.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '5',
        name: 'Kitesurfing',
        displayNameKey: 'kitesurfing.name',
        aliases: [
            'Kiteboarding',
            'Kitesurf Tour',
            'La Ventana Kitesurfing',
        ],
    
        locationKey: 'kitesurfing.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'windy', 'scenic'],
    
        priceLevel: 3,
    
        descriptionKey: 'kitesurfing.description',
    
        images: [
            {
                source: require('../../assets/images/experiences/kitesurfing/1.webp'),
                credit: {
                    author: 'Meg von Haartman',
                    source: 'Unsplash',
                    location: 'Tulum, Quintana Roo, Mexico',
                },
            },
        ],
    
        fallbackMinutes: 52,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'extreme_sports',
        },
    
        tipKey: 'kitesurfing.tip',
    
        coordinates: {
            latitude: 24.050772581493614,
            longitude: -109.98858416864101,
        },
    },
    {
        id: '6',
        name: 'Bay Kayaking',
        displayNameKey: 'bay_kayaking.name',
    
        aliases: [
            'Kayak Tour',
            'Sea Kayaking',
            'La Paz Kayaking',
        ],
    
        locationKey: 'bay_kayaking.location',
    
        categories: ['relax', 'adventure'],
        tags: ['activities', 'scenic', 'coastal'],
    
        priceLevel: 2,
    
        descriptionKey: 'bay_kayaking.description',
    
        images: [
            {
                source: require('../../assets/images/experiences/bay-kayaking/1.webp'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 4,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'coastal_views',
        },
    
        tipKey: 'bay_kayaking.tip',
    
        coordinates: {
            latitude: 24.155619066654573,
            longitude: -110.32268390505517,
        },
    },
]