import { ITEM_COLORS } from '../config/itemColors';
import { PlaceItem } from '../types/item';

export const museums: PlaceItem[] = [
    {
        // Identity
        id: '1',
        itemType: 'place',
        group: 'museums',

        name: 'Museo de la Ballena',
        displayNameKey: 'whale_museum.name',
        aliases: ['Museo de la Ballena', 'Whale Museum'],

        // Classification
        categories: ['family', 'relax'],
        tags: ['indoor', 'educational', 'quick_visit'],
        type: 'indoor_educational',

        // Metadata
        locationKey: 'whale_museum.location',
        priceLevel: 1,

        // Content
        descriptionKey: 'whale_museum.description',
        tipKey: 'whale_museum.tip',
        quickTipKey: 'whale_museum.quickTip',
        quickTipColor: ITEM_COLORS.NEUTRAL_DARK,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'paid'
        },

        // Timing
        fallbackMinutes: 6,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/whale/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/whale/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/whale/3.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.147579690336816,
            longitude: -110.31848900431005,
        },
    },

    {
        // Identity
        id: '2',
        itemType: 'place',
        group: 'museums',

        name: 'Museo de Arte',
        displayNameKey: 'art_museum.name',
        aliases: ['Museo de Arte de Baja California Sur', 'Baja California Sur Art Museum'],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'art'],
        type: 'cultural_historic',

        // Metadata
        locationKey: 'art_museum.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'art_museum.description',
        tipKey: 'art_museum.tip',
        quickTipKey: 'art_museum.quickTip',
        quickTipColor: ITEM_COLORS.NEUTRAL_DARK,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'free',
        },

        // Timing
        fallbackMinutes: 3,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/art/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/art/5.webp'),
                credit: null,
            },
        ],

        // Location        
        coordinates: {
            latitude: 24.162335028456965,
            longitude: -110.31387162325464,
        },
    },

    {
        // Identity
        id: '3',
        itemType: 'place',
        group: 'museums',

        name: 'Museo Regional',
        displayNameKey: 'regional_museum.name',
        aliases: [
            'Museo Regional de Antropología e Historia de Baja California Sur',
            'Regional Museum of Anthropology and History',
        ],

        // Classification
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'educational'],
        type: 'cultural_historic',

        // Metadata
        locationKey: 'regional_museum.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'regional_museum.description',
        tipKey: 'regional_museum.tip',
        quickTipKey: 'regional_museum.quickTip',
        quickTipColor: ITEM_COLORS.NEUTRAL_DARK,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'free',
        },

        // Timing
        fallbackMinutes: 4,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/regional/1.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.15968962595234,
            longitude: -110.30887711850485,
        },
    },

    {
        // Identity
        id: '4',
        itemType: 'place',
        group: 'museums',

        name: 'Museo del Vaquero',
        displayNameKey: 'vaquero_museum.name',
        aliases: [
            'Museo del Vaquero',
            'Cowboy Museum',
            'Baja Cowboy Museum'
        ],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'historic'],
        type: 'cultural_historic',

        // Metadata
        locationKey: 'vaquero_museum.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'vaquero_museum.description',
        tipKey: 'vaquero_museum.tip',
        quickTipKey: 'vaquero_museum.quickTip',
        quickTipColor: ITEM_COLORS.STONE,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'free',
        },

        // Timing
        fallbackMinutes: 58,
        useFallbackOnly: true,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/vaquero/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/vaquero/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 23.803057232753623,
            longitude: -110.10825140433279,
        },
    },

    {
        // Identity
        id: '5',
        itemType: 'place',
        group: 'museums',

        name: 'Museo de la Música',
        displayNameKey: 'music_museum.name',
        aliases: [
            'Museo de la Música',
            'Music Museum',
            'El Triunfo Music Museum'
        ],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['indoor', 'cultural', 'historic'],
        type: 'cultural_historic',

        // Metadata
        locationKey: 'music_museum.location',
        priceLevel: 0,
        
        // Content
        descriptionKey: 'music_museum.description',
        tipKey: 'music_museum.tip',
        quickTipKey: 'music_museum.quickTip',
        quickTipColor: ITEM_COLORS.NEUTRAL_DARK,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'free',
        },

        // Timing
        fallbackMinutes: 57,
        useFallbackOnly: true,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/music/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/music/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 23.80344668673012,
            longitude: -110.10858422143016,
        },
    },

    {
        // Identity
        id: '6',
        itemType: 'place',
        group: 'museums',

        name: 'Ruta de la Plata',
        displayNameKey: 'silver_route_museum.name',
        aliases: [
            'Museo Ruta de la Plata',
            'Silver Route Museum',
            'El Triunfo Silver Route'
        ],
    
        // Classification
        categories: ['relax', 'adventure'],
        tags: ['outdoor', 'cultural', 'historic'],
        type: 'cultural_historic',

        // Metadata
        locationKey: 'silver_route_museum.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'silver_route_museum.description',
        tipKey: 'silver_route_museum.tip',
        quickTipKey: 'silver_route_museum.quickTip',
        quickTipColor: ITEM_COLORS.STONE,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'free',
        },

        // Timing
        fallbackMinutes: 57,
        useFallbackOnly: true,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/silver/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/silver/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 23.802135719189597,
            longitude: -110.10849500425121,
        },
    },

    {
        // Identity
        id: '7',
        itemType: 'place',
        group: 'museums',

        name: 'Centro Cultural La Paz',
        displayNameKey: 'cultural_center.name',
        aliases: [
            'Centro Cultural La Paz',
            'La Paz Cultural Center',
        ],
    
        // Classification
        categories: ['relax', 'social'],
        tags: ['indoor', 'cultural', 'art'],
        type: 'cultural_historic',

        // Metadata
        locationKey: 'cultural_center.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'cultural_center.description',
        tipKey: 'cultural_center.tip',
        quickTipKey: 'cultural_center.quickTip',
        quickTipColor: ITEM_COLORS.NEUTRAL_DARK,

        // Highlight
        highlight: {
            key: 'entry',
            value: 'free',
        },

        // Timing
        fallbackMinutes: 3,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/museums/cultural-center/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/cultural-center/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/cultural-center/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/cultural-center/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/cultural-center/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.161884648348536,
            longitude: -110.31545821853766,
        },
    },
];