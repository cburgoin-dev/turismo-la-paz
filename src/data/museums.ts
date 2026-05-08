import { PLACE_COLORS } from '../config/placeColors';
import { Place } from '../types/navigation';

export const museums: Place[] = [
    {
        id: '1',
        name: 'Museo de la Ballena',
        displayNameKey: 'whale_museum.name',
        aliases: ['Museo de la Ballena', 'Whale Museum'],

        locationKey: 'whale_museum.location',

        categories: ['family', 'relax'],
        tags: ['indoor', 'educational', 'quick_visit'],

        priceLevel: 1,

        descriptionKey: 'whale_museum.description',

        images: [
            {
                source: require('../../assets/images/museums/whale/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/whale/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/whale/3.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 6,
        useFallbackOnly: false,

        type: 'indoor_educational',
        highlight: {
            key: 'entry',
            value: 'paid'
        },

        tipKey: 'whale_museum.tip',
        quickTipKey: 'whale_museum.quickTip',

        quickTipColor: PLACE_COLORS.NEUTRAL_DARK,

        coordinates: {
            latitude: 24.147579690336816,
            longitude: -110.31848900431005,
        }
    },
    {
        id: '2',
        name: 'Museo de Arte',
        displayNameKey: 'art_museum.name',
        aliases: ['Museo de Arte de Baja California Sur', 'Baja California Sur Art Museum'],
    
        locationKey: 'art_museum.location',
    
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'art'],
    
        priceLevel: 0,
    
        descriptionKey: 'art_museum.description',
    
        images: [
            {
                source: require('../../assets/images/museums/art/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 3,
        useFallbackOnly: false,
    
        type: 'cultural_historic',
        highlight: {
            key: 'entry',
            value: 'free',
        },
    
        tipKey: 'art_museum.tip',
        quickTipKey: 'art_museum.quickTip',
    
        quickTipColor: PLACE_COLORS.NEUTRAL_DARK,
    
        coordinates: {
            latitude: 24.162335028456965,
            longitude: -110.31387162325464,
        }
    },
    {
        id: '3',
        name: 'Museo Regional',
        displayNameKey: 'regional_museum.name',
        aliases: [
            'Museo Regional de Antropología e Historia de Baja California Sur',
            'Regional Museum of Anthropology and History',
        ],
    
        locationKey: 'regional_museum.location',
    
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'educational'],
    
        priceLevel: 0,
    
        descriptionKey: 'regional_museum.description',
    
        images: [
            {
                source: require('../../assets/images/museums/regional/1.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 4,
        useFallbackOnly: false,
    
        type: 'cultural_historic',
        highlight: {
            key: 'entry',
            value: 'free',
        },
    
        tipKey: 'regional_museum.tip',
        quickTipKey: 'regional_museum.quickTip',
    
        quickTipColor: PLACE_COLORS.NEUTRAL_DARK,
    
        coordinates: {
            latitude: 24.15968962595234,
            longitude: -110.30887711850485,
        }
    },
    {
        id: '4',
        name: 'Museo del Vaquero',
        displayNameKey: 'vaquero_museum.name',
        aliases: [
            'Museo del Vaquero',
            'Cowboy Museum',
            'Baja Cowboy Museum'
        ],
    
        locationKey: 'vaquero_museum.location',
    
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'historic'],
    
        priceLevel: 0,
    
        descriptionKey: 'vaquero_museum.description',
    
        images: [
            {
                source: require('../../assets/images/museums/vaquero/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 58,
        useFallbackOnly: true,
    
        type: 'cultural_historic',
        highlight: {
            key: 'entry',
            value: 'free',
        },
    
        tipKey: 'vaquero_museum.tip',
        quickTipKey: 'vaquero_museum.quickTip',
    
        quickTipColor: PLACE_COLORS.STONE,
    
        coordinates: {
            latitude: 23.803057232753623,
            longitude: -110.10825140433279,
        }
    },
    {
        id: '5',
        name: 'Museo de la Música',
        displayNameKey: 'music_museum.name',
        aliases: [
            'Museo de la Música',
            'Music Museum',
            'El Triunfo Music Museum'
        ],
    
        locationKey: 'music_museum.location',
    
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'historic'],
    
        priceLevel: 0,
    
        descriptionKey: 'music_museum.description',
    
        images: [
            {
                source: require('../../assets/images/museums/music/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 57,
        useFallbackOnly: true,
    
        type: 'cultural_historic',
        highlight: {
            key: 'entry',
            value: 'free',
        },
    
        tipKey: 'music_museum.tip',
        quickTipKey: 'music_museum.quickTip',
    
        quickTipColor: PLACE_COLORS.NEUTRAL_DARK,
    
        coordinates: {
            latitude: 23.80344668673012,
            longitude: -110.10858422143016,
        }
    },
    {
        id: '6',
        name: 'Ruta de la Plata',
        displayNameKey: 'silver_route_museum.name',
        aliases: [
            'Museo Ruta de la Plata',
            'Silver Route Museum',
            'El Triunfo Silver Route'
        ],
    
        locationKey: 'silver_route_museum.location',
    
        categories: ['relax', 'adventure'],
        tags: ['outdoor', 'cultural', 'historic'],
    
        priceLevel: 0,
    
        descriptionKey: 'silver_route_museum.description',
    
        images: [
            {
                source: require('../../assets/images/museums/silver/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 57,
        useFallbackOnly: true,
    
        type: 'cultural_historic',
        highlight: {
            key: 'entry',
            value: 'free',
        },
    
        tipKey: 'silver_route_museum.tip',
        quickTipKey: 'silver_route_museum.quickTip',
    
        quickTipColor: PLACE_COLORS.STONE,
    
        coordinates: {
            latitude: 23.802135719189597,
            longitude: -110.10849500425121,
        }
    }
]