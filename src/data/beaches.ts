import { ITEM_COLORS } from '../config/itemColors';
import { PlaceItem } from '../types/item';

export const beaches: PlaceItem[] = [
    {
        // Identity
        id: '1',
        itemType: 'place',
        group: 'beaches',

        name: 'Balandra',
        displayNameKey: 'balandra.name',
        aliases: ['Playa Balandra', 'Balandra Beach'],

        // Classification
        categories: ['relax', 'family'],
        tags: ['scenic', 'quiet', 'shallow_water'],
        type: 'quiet_scenic',

        // Metadata
        locationKey: 'balandra.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'balandra.description',
        tipKey: 'balandra.tip',
        quickTipKey: 'balandra.quickTip',
        quickTipColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 30,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/balandra/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        },
    },

    {
        // Identity
        id: '2',
        itemType: 'place',
        group: 'beaches',

        name: 'El Tecolote',
        displayNameKey: 'tecolote.name',
        aliases: ['Playa El Tecolote', 'El Tecolote Beach', 'Tecolote'],

        // Classification
        categories: ['social', 'adventure'],
        tags: ['food', 'activities', 'boat_tours'],
        type: 'lively_popular',

        // Metadata
        locationKey: 'tecolote.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'tecolote.description',
        tipKey: 'tecolote.tip',
        quickTipKey: 'tecolote.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'available'
        },

        // Timing
        fallbackMinutes: 31,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/tecolote/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.336326705782476,
            longitude: -110.31649229942073,
        },
    },

    {
        // Identity
        id: '3',
        itemType: 'place',
        group: 'beaches',

        name: 'El Coromuel',
        displayNameKey: 'coromuel.name',
        aliases: ['Playa El Coromuel', 'El Coromuel Beach', 'Coromuel'],

        // Classification
        categories: ['family', 'social'],
        tags: ['urban', 'accessible', 'quick_visit'],
        type: 'urban_accessible',

        // Metadata
        locationKey: 'coromuel.location',
        priceLevel: 1,

        // Content
        descriptionKey: 'coromuel.description',
        tipKey: 'coromuel.tip',
        quickTipKey: 'coromuel.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 12,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/coromuel/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coromuel/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coromuel/3.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.196546189554766,
            longitude: -110.30012198647074,
        },
    },

    {
        // Identity
        id: '4',
        itemType: 'place',
        group: 'beaches',

        name: 'Pichilingue',
        displayNameKey: 'pichilingue.name',
        aliases: ['Playa Pichilingue', 'Pichilingue Beach'],

        // Classification
        categories: ['family', 'relax'],
        tags: ['family', 'calm', 'food'],
        type: 'calm_family',

        // Metadata
        locationKey: 'pichilingue.location',
        priceLevel: 1,

        // Content
        descriptionKey: 'pichilingue.description',
        tipKey: 'pichilingue.tip',
        quickTipKey: 'pichilingue.quickTip',
        quickTipColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'available'
        },

        // Timing
        fallbackMinutes: 23,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/pichilingue/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.28412389165191,
            longitude: -110.32794883307128,
        },
    },

    {
        // Identity
        id: '5',
        itemType: 'place',
        group: 'beaches',

        name: 'El Tesoro',
        displayNameKey: 'tesoro.name',
        aliases: ['Playa El Tesoro', 'El Tesoro Beach', 'Tesoro'],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['calm', 'family', 'quiet'],
        type: 'calm_family',

        // Metadata
        locationKey: 'tesoro.location',
        priceLevel: 1,

        // Content
        descriptionKey: 'tesoro.description',
        tipKey: 'tesoro.tip',
        quickTipKey: 'tesoro.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'available'
        },

        // Timing
        fallbackMinutes: 18,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/tesoro/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tesoro/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tesoro/3.webp'),
                credit: null,
            },
        ],

        // Location    
        coordinates: {
            latitude: 24.254466500607062,
            longitude: -110.31504772605022,
        },
    },

    {
        // Identity
        id: '6',
        itemType: 'place',
        group: 'beaches',

        name: 'El Caimancito',
        displayNameKey: 'caimancito.name',
        aliases: ['Playa El Caimancito', 'El Caimancito Beach', 'Caimancito'],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['urban', 'quiet', 'quick_visit'],
        type: 'urban_accessible',

        // Metadata
        locationKey: 'caimancito.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'caimancito.description',
        tipKey: 'caimancito.tip',
        quickTipKey: 'caimancito.quickTip',
        quickTipColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 11,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/caimancito/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/caimancito/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/caimancito/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/caimancito/4.webp'),
                credit: null,
            },
        ],

        // Location    
        coordinates: {
            latitude: 24.20548849127535,
            longitude: -110.29996144003434,
        },
    },

    {
        // Identity
        id: '7',
        itemType: 'place',
        group: 'beaches',

        name: 'El Saltito',
        displayNameKey: 'saltito.name',
        aliases: ['Playa El Saltito', 'El Saltito Beach', 'Saltito'],
    
        // Classification
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'activities', 'quiet'],
        type: 'quiet_scenic',

        // Metadata
        locationKey: 'saltito.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'saltito.description',
        tipKey: 'saltito.tip',
        quickTipKey: 'saltito.quickTip',
        quickTipColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 39,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/saltito/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.235076155672733,
            longitude: -110.1371035993577,
        },
    },

    {
        // Identity
        id: '8',
        itemType: 'place',
        group: 'beaches',

        name: 'El Comitán',
        displayNameKey: 'comitan.name',
        aliases: ['Playa El Comitán', 'El Comitán Beach', 'Comitán'],

        // Classification
        categories: ['relax', 'family'],
        tags: ['calm', 'quiet', 'family'],
        type: 'calm_family',

        // Metadata
        locationKey: 'comitan.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'comitan.description',
        tipKey: 'comitan.tip',
        quickTipKey: 'comitan.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'available'
        },

        // Timing
        fallbackMinutes: 30,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/comitan/1.webp'),
                credit: 'Photo by RollitoDeGuayaba, CC BY-SA 4.0, via Wikimedia Commons',
            },
            {
                source: require('../../assets/images/beaches/comitan/2.webp'),
                credit: 'Photo by RollitoDeGuayaba, CC BY-SA 4.0, via Wikimedia Commons',
            },
            {
                source: require('../../assets/images/beaches/comitan/3.webp'),
                credit: 'Photo by RollitoDeGuayaba, CC BY-SA 4.0, via Wikimedia Commons',
            },
        ],

        // Location
        coordinates: {
            latitude: 24.131647171185367,
            longitude: -110.41884183859545,
        },
    },

    {
        // Identity
        id: '9',
        itemType: 'place',
        group: 'beaches',

        name: 'La Concha',
        displayNameKey: 'concha.name',
        aliases: ['Playa La Concha', 'La Concha Beach', 'Concha'],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['calm', 'accessible', 'food'],
        type: 'calm_family',

        // Metadata
        locationKey: 'concha.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'concha.description',
        tipKey: 'concha.tip',
        quickTipKey: 'concha.quickTip',
        quickTipColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'available'
        },

        // Timing
        fallbackMinutes: 11,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/concha/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/concha/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/concha/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/concha/4.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.2018420642319,
            longitude: -110.29966790430403,
        },
    },

    {
        // Identity
        id: '10',
        itemType: 'place',
        group: 'beaches',

        name: 'Las Cruces',
        displayNameKey: 'cruces.name',
        aliases: ['Playa Las Cruces', 'Las Cruces Beach', 'Las Cruces'],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['quiet', 'scenic', 'calm'],
        type: 'quiet_scenic',

        // Metadata
        locationKey: 'cruces.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'cruces.description',
        tipKey: 'cruces.tip',
        quickTipKey: 'cruces.quickTip',
        quickTipColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 53,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/cruces/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/5.webp'),
                credit: null,
            },
        ],

        // Location    
        coordinates: {
            latitude: 24.213120847733762,
            longitude: -110.08913904533443,
        },
    },

    {
        // Identity
        id: '11',
        itemType: 'place',
        group: 'beaches',

        name: 'Punta Coyote',
        displayNameKey: 'coyote.name',
        aliases: ['Playa Punta Coyote', 'Punta Coyote Beach', 'Punta Coyote'],
    
        // Classification
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'quiet', 'activities'],
        type: 'quiet_scenic',

        // Metadata
        locationKey: 'coyote.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'coyote.description',
        tipKey: 'coyote.tip',
        quickTipKey: 'coyote.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 38,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/coyote/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/5.webp'),
                credit: null,
            },
        ],

        // Location    
        coordinates: {
            latitude: 24.313120300456347,
            longitude: -110.23057378435287,
        },
    },

    {
        // Identity
        id: '12',
        itemType: 'place',
        group: 'beaches',

        name: 'Los Muertitos',
        displayNameKey: 'muertitos.name',
        aliases: ['Playa Los Muertitos', 'Los Muertitos Beach', 'Los Muertitos'],
    
        // Classification
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'quiet', 'activities'],
        type: 'quiet_scenic',

        // Metadata
        locationKey: 'muertitos.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'muertitos.description',
        tipKey: 'muertitos.tip',
        quickTipKey: 'muertitos.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 37,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/muertitos/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.24966485883396,
            longitude: -110.15905676672506,
        },
    },

    {
        // Identity
        id: '13',
        itemType: 'place',
        group: 'beaches',

        name: 'El Sargento',
        displayNameKey: 'sargento.name',
        aliases: ['Playa El Sargento', 'El Sargento Beach', 'El Sargento'],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'windy'],
        type: 'lively_popular',

        // Metadata
        locationKey: 'sargento.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'sargento.description',
        tipKey: 'sargento.tip',
        quickTipKey: 'sargento.quickTip',
        quickTipColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 60,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/sargento/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.079934824994496,
            longitude: -109.99177250460397,
        },
    },

    {
        // Identity
        id: '14',
        itemType: 'place',
        group: 'beaches',

        name: 'El Gaspareño',
        displayNameKey: 'gaspareno.name',
        aliases: ['Playa El Gaspareño', 'El Gaspareño Beach', 'Gaspareño'],
    
        // Classification
        categories: ['relax', 'family'],
        tags: ['quiet', 'calm', 'scenic'],
        type: 'quiet_scenic',

        // Metadata
        locationKey: 'gaspareno.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'gaspareno.description',
        tipKey: 'gaspareno.tip',
        quickTipKey: 'gaspareno.quickTip',
        quickTipColor: ITEM_COLORS.SAND,
        
        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 93,
        useFallbackOnly: true,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/gaspareno/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 23.183497599776093,
            longitude: -110.13937708465713,
        },
    },

    {
        // Identity
        id: '15',
        itemType: 'place',
        group: 'beaches',

        name: 'Las Playitas',
        displayNameKey: 'las_playitas.name',
        aliases: ['Las Playitas Beach', 'Playitas Todos Santos'],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['scenic', 'activities', 'windy'],
        type: 'lively_popular',

        // Metadata
        locationKey: 'las_playitas.location',
        priceLevel: 0,

        // Content
        descriptionKey: 'las_playitas.description',
        tipKey: 'las_playitas.tip',
        quickTipKey: 'las_playitas.quickTip',
        quickTipColor: ITEM_COLORS.SAND,

        // Highlight
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        // Timing
        fallbackMinutes: 83,
        useFallbackOnly: true,

        // Media
        images: [
            {
                source: require('../../assets/images/beaches/playitas/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/playitas/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/playitas/3.webp'),
                credit: null,
            },

            {
                source: require('../../assets/images/beaches/playitas/4.webp'),
                credit: null,
            },
        ],

        // Location    
        coordinates: {
            latitude: 23.465893536167755,
            longitude: -110.25680314668121,
        },
    },
];