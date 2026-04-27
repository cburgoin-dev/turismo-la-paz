const LOW_WATER = 'rgba(88, 170, 165, 0.88)'
const DEEP_WATER = 'rgba(28, 100, 120, 0.88)'
const SAND = 'rgba(194, 163, 123, 0.92)'

export const beaches = [
    {
        id: '1',
        name: 'Balandra',
        displayNameKey: 'balandra.name',
        aliases: ['Playa Balandra', 'Balandra Beach'],

        locationKey: 'balandra.location',

        categories: ['relax', 'family'],
        tags: ['scenic', 'quiet', 'shallow_water'],

        priceLevel: 2,

        descriptionKey: 'balandra.description',
    
        images: [
            require('../../assets/images/beaches/balandra/1.jpg'),
            require('../../assets/images/beaches/balandra/2.jpg'),
            require('../../assets/images/beaches/balandra/3.jpg'),
            require('../../assets/images/beaches/balandra/4.jpg'),
            require('../../assets/images/beaches/balandra/5.jpg'),
        ],

        fallbackMinutes: 37,

        type: 'quiet_scenic',
        parking: 'limited',

        tipKey: 'balandra.tip',
        quickTipKey: 'balandra.quickTip',

        quickTipColor: LOW_WATER,

        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        }
    },
    {
        id: '2',
        name: 'El Tecolote',
        displayNameKey: 'tecolote.name',
        aliases: ['Playa El Tecolote', 'El Tecolote Beach', 'Tecolote'],

        locationKey: 'tecolote.location',

        categories: ['social', 'adventure'],
        tags: ['food', 'activities', 'boat_tours'],

        priceLevel: 2,

        descriptionKey: 'tecolote.description',

        images: [
            require('../../assets/images/beaches/tecolote/1.jpg'),
            require('../../assets/images/beaches/tecolote/2.jpg'),
            require('../../assets/images/beaches/tecolote/3.jpg'),
            require('../../assets/images/beaches/tecolote/4.jpg'),
            require('../../assets/images/beaches/tecolote/5.jpg'),
        ],

        fallbackMinutes: 39,

        type: 'lively_popular',
        parking: 'available',
    
        tipKey: 'tecolote.tip',
        quickTipKey: 'tecolote.quickTip',

        quickTipColor: SAND,

        coordinates: {
            latitude: 24.336326705782476,
            longitude: -110.31649229942073,
        }
    },
    {
        id: '3',
        name: 'El Coromuel',
        displayNameKey: 'coromuel.name',
        aliases: ['Playa El Coromuel', 'El Coromuel Beach', 'Coromuel'],

        locationKey: 'coromuel.location',

        categories: ['family', 'social'],
        tags: ['urban', 'accessible', 'quick_visit'],

        priceLevel: 1,

        descriptionKey: 'coromuel.description',

        images: [
            require('../../assets/images/beaches/coromuel/1.jpg'),
            require('../../assets/images/beaches/coromuel/2.jpg'),
            require('../../assets/images/beaches/coromuel/3.jpg'),
        ],

        fallbackMinutes: 16,
        
        type: 'urban_accessible',
        parking: 'limited',

        tipKey: 'coromuel.tip',
        quickTipKey: 'coromuel.quickTip',

        quickTipColor: SAND,

        coordinates: {
            latitude: 24.196546189554766,
            longitude: -110.30012198647074,
        }
    },
    {
        id: '4',
        name: 'Pichilingue',
        displayNameKey: 'pichilingue.name',
        aliases: ['Playa Pichilingue', 'Pichilingue Beach'],

        locationKey: 'pichilingue.location',

        categories: ['family', 'relax'],
        tags: ['family', 'calm', 'food'],

        priceLevel: 1,

        descriptionKey: 'pichilingue.description',

        images: [
            require('../../assets/images/beaches/pichilingue/1.jpg'),
            require('../../assets/images/beaches/pichilingue/2.jpg'),
            require('../../assets/images/beaches/pichilingue/3.jpg'),
            require('../../assets/images/beaches/pichilingue/4.jpg'),
            require('../../assets/images/beaches/pichilingue/5.jpg'),
        ],

        fallbackMinutes: 32,

        type: 'calm_family',
        parking: 'available',

        tipKey: 'pichilingue.tip',
        quickTipKey: 'pichilingue.quickTip',

        quickTipColor: LOW_WATER,
        
        coordinates: {
            latitude: 24.28412389165191,
            longitude: -110.32794883307128,
        }
    },
    {
        id: '5',
        name: 'El Tesoro',
        displayNameKey: 'tesoro.name',
        aliases: ['Playa El Tesoro', 'El Tesoro Beach', 'Tesoro'],
    
        locationKey: 'tesoro.location',
    
        categories: ['relax', 'family'],
        tags: ['calm', 'family', 'quiet'],
    
        priceLevel: 1,
    
        descriptionKey: 'tesoro.description',
    
        images: [
            require('../../assets/images/beaches/tesoro/1.jpg'),
            require('../../assets/images/beaches/tesoro/2.jpg'),
            require('../../assets/images/beaches/tesoro/3.jpg'),
        ],
    
        fallbackMinutes: 29,
    
        type: 'calm_family',
        parking: 'available',
    
        tipKey: 'tesoro.tip',
        quickTipKey: 'tesoro.quickTip',
    
        quickTipColor: SAND,
    
        coordinates: {
            latitude: 24.254466500607062,
            longitude: -110.31504772605022,
        }
    },
    {
        id: '6',
        name: 'El Caimancito',
        displayNameKey: 'caimancito.name',
        aliases: ['Playa El Caimancito', 'El Caimancito Beach', 'Caimancito'],
    
        locationKey: 'caimancito.location',
    
        categories: ['relax', 'family'],
        tags: ['urban', 'quiet', 'quick_visit'],
    
        priceLevel: 0,
    
        descriptionKey: 'caimancito.description',
    
        images: [
            require('../../assets/images/beaches/caimancito/1.jpg'),
            require('../../assets/images/beaches/caimancito/2.jpg'),
            require('../../assets/images/beaches/caimancito/3.jpg'),
            require('../../assets/images/beaches/caimancito/4.jpg'),
        ],
    
        fallbackMinutes: 18,
    
        type: 'urban_accessible',
        parking: 'limited',
    
        tipKey: 'caimancito.tip',
        quickTipKey: 'caimancito.quickTip',
    
        quickTipColor: DEEP_WATER,
    
        coordinates: {
            latitude: 24.20548849127535,
            longitude: -110.29996144003434,
        }
    },
    {
        id: '7',
        name: 'El Saltito',
        displayNameKey: 'saltito.name',
        aliases: ['Playa El Saltito', 'El Saltito Beach', 'Saltito'],
    
        locationKey: 'saltito.location',
    
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'activities', 'quiet'],
    
        priceLevel: 0,
    
        descriptionKey: 'saltito.description',
    
        images: [
            require('../../assets/images/beaches/saltito/1.jpg'),
            require('../../assets/images/beaches/saltito/2.jpg'),
            require('../../assets/images/beaches/saltito/3.jpg'),
            require('../../assets/images/beaches/saltito/4.jpg'),
            require('../../assets/images/beaches/saltito/5.jpg'),
        ],
    
        fallbackMinutes: 25,
    
        type: 'quiet_scenic',
        parking: 'limited',
    
        tipKey: 'saltito.tip',
        quickTipKey: 'saltito.quickTip',
    
        quickTipColor: DEEP_WATER,
    
        coordinates: {
            latitude: 24.235045638726756,
            longitude: -110.13711363369207,
        }
    }
];