import { PLACE_COLORS } from '../config/placeColors';
import { Place } from '../types/navigation';

export const viewpoints: Place[] = [
    {
        id: '1',
        name: 'Cerro de la Calavera',
        displayNameKey: 'calavera.name',
        aliases: ['Cerro de la Calavera'],

        locationKey: 'calavera.location',

        categories: ['adventure', 'relax'],
        tags: ['sunset', 'scenic', 'hiking'],

        priceLevel: 0,

        descriptionKey: 'calavera.description',

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

        fallbackMinutes: 7,
        useFallbackOnly: false,

        type: 'scenic_hiking',
        highlight: {
            key: 'viewpoint',
            value: 'elevated',
        },

        tipKey: 'calavera.tip',
        quickTipKey: 'calavera.quickTip',

        quickTipColor: PLACE_COLORS.SUNSET,

        coordinates: {
            latitude: 24.187152371864215,
            longitude: -110.29901320425611,
        }
    },
    {
        id: '2',
        name: 'Cerro Atravesado',
        displayNameKey: 'atravesado.name',
        aliases: ['Cerro Atravesado'],
    
        locationKey: 'atravesado.location',
    
        categories: ['adventure', 'social'],
        tags: ['scenic', 'hiking', 'sunset'],
    
        priceLevel: 0,
    
        descriptionKey: 'atravesado.description',
    
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
    
        fallbackMinutes: 16,
        useFallbackOnly: false,
    
        type: 'scenic_hiking',
    
        highlight: {
            key: 'viewpoint',
            value: 'elevated',
        },
    
        tipKey: 'atravesado.tip',
        quickTipKey: 'atravesado.quickTip',
    
        quickTipColor: PLACE_COLORS.SUNSET,
    
        coordinates: {
            latitude: 24.124516441604705,
            longitude: -110.29121060853008,
        }
    },
    {
        id: '3',
        name: 'Malecón Viewpoint',
        displayNameKey: 'malecon_viewpoint.name',
    
        aliases: [
            'Malecón Viewpoint',
            'La Paz Sunset View',
            'Malecón Scenic View',
        ],
    
        locationKey: 'malecon_viewpoint.location',
    
        categories: ['social', 'relax'],
        tags: ['sunset', 'coastal', 'scenic'],
    
        priceLevel: 0,
    
        descriptionKey: 'malecon_viewpoint.description',
    
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
    
        fallbackMinutes: 4,
        useFallbackOnly: false,
    
        type: 'sunset_scenic',
    
        highlight: {
            key: 'viewpoint',
            value: 'urban',
        },
    
        tipKey: 'malecon_viewpoint.tip',
        quickTipKey: 'malecon_viewpoint.quickTip',
    
        quickTipColor: PLACE_COLORS.SUNSET,
    
        coordinates: {
            latitude: 24.16397298369885,
            longitude: -110.31664621573674,
        },
    },
    {
        id: '4',
        name: 'Balandra Viewpoint',
        displayNameKey: 'balandra_viewpoint.name',
    
        aliases: [
            'Balandra Viewpoint',
            'Scenic Route to Balandra',
            'Balandra Coastal View',
        ],
    
        locationKey: 'balandra_viewpoint.location',
    
        categories: ['relax', 'social'],
        tags: ['coastal', 'scenic', 'sunset'],
    
        priceLevel: 0,
    
        descriptionKey: 'balandra_viewpoint.description',
    
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
    
        fallbackMinutes: 30,
        useFallbackOnly: false,
    
        type: 'sunset_scenic',
    
        highlight: {
            key: 'viewpoint',
            value: 'coastal',
        },
    
        tipKey: 'balandra_viewpoint.tip',
        quickTipKey: 'balandra_viewpoint.quickTip',
    
        quickTipColor: PLACE_COLORS.SUNSET,
    
        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        }
    },
]