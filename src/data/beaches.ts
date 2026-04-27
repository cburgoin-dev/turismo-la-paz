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

        fallbackMinutes: 35,

        type: 'quiet_scenic',
        parking: 'limited',

        tipKey: 'balandra.tip',
        quickTipKey: 'balandra.quickTip',

        quickTipColor: 'rgba(28, 100, 120, 0.88)',

        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        }
    },
    {
        id: '2',
        name: 'El Tecolote',
        displayNameKey: 'tecolote.name',
        aliases: ['Playa Tecolote', 'Tecolote Beach'],

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

        fallbackMinutes: 40,

        type: 'lively_popular',
        parking: 'available',
    
        tipKey: 'tecolote.tip',
        quickTipKey: 'tecolote.quickTip',

        quickTipColor: 'rgba(88, 170, 165, 0.88)',

        coordinates: {
            latitude: 24.336326705782476,
            longitude: -110.31649229942073,
        }
    },
    {
        id: '3',
        name: 'El Coromuel',
        displayNameKey: 'coromuel.name',
        aliases: ['Playa Coromuel', 'Coromuel Beach'],

        locationKey: 'coromuel.location',

        categories: ['family', 'social'],
        tags: ['urban', 'accessible', 'quick_visit'],

        priceLevel: 1,

        descriptionKey: 'coromuel.description',

        images: [
            require('../../assets/images/beaches/coromuel/1.jpg'),
            require('../../assets/images/beaches/coromuel/2.jpg'),
            require('../../assets/images/beaches/coromuel/3.jpg'),
            require('../../assets/images/beaches/coromuel/4.jpg'),
            require('../../assets/images/beaches/coromuel/5.jpg'),
        ],

        fallbackMinutes: 15,
        
        type: 'urban_accessible',
        parking: 'limited',

        tipKey: 'coromuel.tip',
        quickTipKey: 'coromuel.quickTip',

        quickTipColor: 'rgba(194, 163, 123, 0.92)',

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

        fallbackMinutes: 30,

        type: 'calm_family',
        parking: 'available',

        tipKey: 'pichilingue.tip',
        quickTipKey: 'pichilingue.quickTip',

        quickTipColor: 'rgba(194, 163, 123, 0.92)',
        
        coordinates: {
            latitude: 24.28412389165191,
            longitude: -110.32794883307128,
        }
    },
];