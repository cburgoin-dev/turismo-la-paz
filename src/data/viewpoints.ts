import { ITEM_COLORS } from '../config/itemColors';
import { PlaceItem } from '../types/item';

export const viewpoints: PlaceItem[] = [
    {
        // Identity
        id: '1',
        itemType: 'place',
        group: 'viewpoints',

        name: 'Cerro de la Calavera',
        displayNameKey: 'calavera.name',
        aliases: ['Cerro de la Calavera'],

        // Classification
        categories: ['adventure', 'relax'],
        tags: ['sunset', 'scenic', 'hiking'],
        type: 'scenic_hiking',

        // Metadata
        locationKey: 'calavera.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'calavera.description',
        tipKey: 'calavera.tip',
        quickTipKey: 'calavera.quickTip',
        quickTipColor: ITEM_COLORS.SUNSET,

        // Higlight
        highlight: {
            key: 'viewpoint',
            value: 'elevated',
        },

        // Timing
        fallbackMinutes: 7,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/viewpoints/calavera/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/calavera/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/calavera/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/calavera/4.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.187152371864215,
            longitude: -110.29901320425611,
        },
    },

    {
        // Identity
        id: '2',
        itemType: 'place',
        group: 'viewpoints',

        name: 'Cerro Atravesado',
        displayNameKey: 'atravesado.name',
        aliases: ['Cerro Atravesado'],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['scenic', 'hiking', 'sunset'],
        type: 'scenic_hiking',

        // Metadata
        locationKey: 'atravesado.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'atravesado.description',
        tipKey: 'atravesado.tip',
        quickTipKey: 'atravesado.quickTip',
        quickTipColor: ITEM_COLORS.SUNSET,

        // Highlight
        highlight: {
            key: 'viewpoint',
            value: 'elevated',
        },
        
        // Timing
        fallbackMinutes: 16,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/viewpoints/atravesado/1.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'Baja California Sur, Mexico',
                },
            },
            {
                source: require('../../assets/images/viewpoints/atravesado/2.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'Baja California Sur, Mexico',
                },
            },
            {
                source: require('../../assets/images/viewpoints/atravesado/3.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.124516441604705,
            longitude: -110.29121060853008,
        },
    },

    {
        // Identity
        id: '3',
        itemType: 'place',
        group: 'viewpoints',
        

        name: 'Malecón Viewpoint',
        displayNameKey: 'malecon_viewpoint.name',
        aliases: [
            'Malecón Viewpoint',
            'La Paz Sunset View',
            'Malecón Scenic View',
        ],
    
        // Classification
        categories: ['social', 'relax'],
        tags: ['sunset', 'coastal', 'scenic'],
        type: 'sunset_scenic',

        // Metadata
        locationKey: 'malecon_viewpoint.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'malecon_viewpoint.description',
        tipKey: 'malecon_viewpoint.tip',
        quickTipKey: 'malecon_viewpoint.quickTip',
        quickTipColor: ITEM_COLORS.SUNSET,

        // Highlight
        highlight: {
            key: 'viewpoint',
            value: 'urban',
        },

        // Timing
        fallbackMinutes: 4,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/viewpoints/malecon/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/malecon/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/malecon/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/malecon/4.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.16397298369885,
            longitude: -110.31664621573674,
        },
    },

    {
        // Identity
        id: '4',
        itemType: 'place',
        group: 'viewpoints',

        name: 'Balandra Viewpoint',
        displayNameKey: 'balandra_viewpoint.name',
        aliases: [
            'Balandra Viewpoint',
            'Scenic Route to Balandra',
            'Balandra Coastal View',
        ],
    
        // Classification
        categories: ['relax', 'social'],
        tags: ['coastal', 'scenic', 'sunset'],
        type: 'sunset_scenic',

        // Metadata
        locationKey: 'balandra_viewpoint.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'balandra_viewpoint.description',
        tipKey: 'balandra_viewpoint.tip',
        quickTipKey: 'balandra_viewpoint.quickTip',
        quickTipColor: ITEM_COLORS.SUNSET,

        // Highlight
        highlight: {
            key: 'viewpoint',
            value: 'coastal',
        },

        // Timing
        fallbackMinutes: 30,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/viewpoints/balandra/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/balandra/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/balandra/3.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        },
    },
];