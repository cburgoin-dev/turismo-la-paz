import { PLACE_COLORS } from '../config/placeColors';
import { Place } from '../types/navigation';

export const beaches: Place[] = [
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
            {
                source: require('../../assets/images/beaches/balandra/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/balandra/5.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 37,

        type: 'quiet_scenic',
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        tipKey: 'balandra.tip',
        quickTipKey: 'balandra.quickTip',

        quickTipColor: PLACE_COLORS.LOW_WATER,

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
            {
                source: require('../../assets/images/beaches/tecolote/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tecolote/5.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 39,

        type: 'lively_popular',
        highlight: {
            key: 'parking',
            value: 'available'
        },
    
        tipKey: 'tecolote.tip',
        quickTipKey: 'tecolote.quickTip',

        quickTipColor: PLACE_COLORS.SAND,

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
            {
                source: require('../../assets/images/beaches/coromuel/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coromuel/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coromuel/3.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 16,
        
        type: 'urban_accessible',
        highlight: {
            key: 'parking',
            value: 'limited'
        },

        tipKey: 'coromuel.tip',
        quickTipKey: 'coromuel.quickTip',

        quickTipColor: PLACE_COLORS.SAND,

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
            {
                source: require('../../assets/images/beaches/pichilingue/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/pichilingue/5.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 32,

        type: 'calm_family',
        highlight: {
            key: 'parking',
            value: 'available'
        },

        tipKey: 'pichilingue.tip',
        quickTipKey: 'pichilingue.quickTip',

        quickTipColor: PLACE_COLORS.LOW_WATER,
        
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
            {
                source: require('../../assets/images/beaches/tesoro/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tesoro/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/tesoro/3.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 29,
    
        type: 'calm_family',
        highlight: {
            key: 'parking',
            value: 'available'
        },
    
        tipKey: 'tesoro.tip',
        quickTipKey: 'tesoro.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
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
            {
                source: require('../../assets/images/beaches/caimancito/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/caimancito/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/caimancito/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/caimancito/4.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 18,
    
        type: 'urban_accessible',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'caimancito.tip',
        quickTipKey: 'caimancito.quickTip',
    
        quickTipColor: PLACE_COLORS.DEEP_WATER,
    
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
            {
                source: require('../../assets/images/beaches/saltito/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/saltito/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 25,
    
        type: 'quiet_scenic',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'saltito.tip',
        quickTipKey: 'saltito.quickTip',
    
        quickTipColor: PLACE_COLORS.DEEP_WATER,
    
        coordinates: {
            latitude: 24.235076155672733,
            longitude: -110.1371035993577,
        }
    },
    {
        id: '8',
        name: 'El Comitán',
        displayNameKey: 'comitan.name',
        aliases: ['Playa El Comitán', 'El Comitán Beach', 'Comitán'],
    
        locationKey: 'comitan.location',
    
        categories: ['relax', 'family'],
        tags: ['calm', 'quiet', 'family'],
    
        priceLevel: 0,
    
        descriptionKey: 'comitan.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/comitan/1.jpg'),
                credit: 'Photo by RollitoDeGuayaba, CC BY-SA 4.0, via Wikimedia Commons',
            },
            {
                source: require('../../assets/images/beaches/comitan/2.jpg'),
                credit: 'Photo by RollitoDeGuayaba, CC BY-SA 4.0, via Wikimedia Commons',
            },
            {
                source: require('../../assets/images/beaches/comitan/3.jpg'),
                credit: 'Photo by RollitoDeGuayaba, CC BY-SA 4.0, via Wikimedia Commons',
            },
        ],
    
        fallbackMinutes: 20,
    
        type: 'calm_family',
        highlight: {
            key: 'parking',
            value: 'available'
        },
    
        tipKey: 'comitan.tip',
        quickTipKey: 'comitan.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
        coordinates: {
            latitude: 24.131647171185367,
            longitude: -110.41884183859545,
        }
    },
    {
        id: '9',
        name: 'La Concha',
        displayNameKey: 'concha.name',
        aliases: ['Playa La Concha', 'La Concha Beach', 'Concha'],
    
        locationKey: 'concha.location',
    
        categories: ['relax', 'family'],
        tags: ['calm', 'accessible', 'food'],
    
        priceLevel: 2,
    
        descriptionKey: 'concha.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/concha/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/concha/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/concha/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/concha/4.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 19,
    
        type: 'calm_family',
        highlight: {
            key: 'parking',
            value: 'available'
        },
    
        tipKey: 'concha.tip',
        quickTipKey: 'concha.quickTip',
    
        quickTipColor: PLACE_COLORS.LOW_WATER,
    
        coordinates: {
            latitude: 24.2018420642319,
            longitude: -110.29966790430403,
        }
    },
    {
        id: '10',
        name: 'Las Cruces',
        displayNameKey: 'cruces.name',
        aliases: ['Playa Las Cruces', 'Las Cruces Beach', 'Las Cruces'],
    
        locationKey: 'cruces.location',
    
        categories: ['relax', 'family'],
        tags: ['quiet', 'scenic', 'calm'],
    
        priceLevel: 0,
    
        descriptionKey: 'cruces.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/cruces/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/cruces/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 20,
    
        type: 'quiet_scenic',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'cruces.tip',
        quickTipKey: 'cruces.quickTip',
    
        quickTipColor: PLACE_COLORS.DEEP_WATER,
    
        coordinates: {
            latitude: 24.213120847733762,
            longitude: -110.08913904533443,
        }
    },
    {
        id: '11',
        name: 'Punta Coyote',
        displayNameKey: 'coyote.name',
        aliases: ['Playa Punta Coyote', 'Punta Coyote Beach', 'Punta Coyote'],
    
        locationKey: 'coyote.location',
    
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'quiet', 'activities'],
    
        priceLevel: 0,
    
        descriptionKey: 'coyote.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/coyote/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/coyote/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 35,
    
        type: 'quiet_scenic',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'coyote.tip',
        quickTipKey: 'coyote.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
        coordinates: {
            latitude: 24.313120300456347,
            longitude: -110.23057378435287,
        }
    },
    {
        id: '12',
        name: 'Los Muertitos',
        displayNameKey: 'muertitos.name',
        aliases: ['Playa Los Muertitos', 'Los Muertitos Beach', 'Los Muertitos'],
    
        locationKey: 'muertitos.location',
    
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'quiet', 'activities'],
    
        priceLevel: 0,
    
        descriptionKey: 'muertitos.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/muertitos/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/muertitos/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 40,
    
        type: 'quiet_scenic',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'muertitos.tip',
        quickTipKey: 'muertitos.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
        coordinates: {
            latitude: 24.24966485883396,
            longitude: -110.15905676672506,
        }
    },
    {
        id: '13',
        name: 'El Sargento',
        displayNameKey: 'sargento.name',
        aliases: ['Playa El Sargento', 'El Sargento Beach', 'El Sargento'],
    
        locationKey: 'sargento.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'windy'],
    
        priceLevel: 0,
    
        descriptionKey: 'sargento.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/sargento/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/2.png'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/sargento/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 45,
    
        type: 'lively_popular',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'sargento.tip',
        quickTipKey: 'sargento.quickTip',
    
        quickTipColor: PLACE_COLORS.DEEP_WATER,
    
        coordinates: {
            latitude: 24.079934824994496,
            longitude: -109.99177250460397,
        }
    },
    {
        id: '14',
        name: 'El Gaspareño',
        displayNameKey: 'gaspareno.name',
        aliases: ['Playa El Gaspareño', 'El Gaspareño Beach', 'Gaspareño'],
    
        locationKey: 'gaspareno.location',
    
        categories: ['relax', 'family'],
        tags: ['quiet', 'calm', 'scenic'],
    
        priceLevel: 0,
    
        descriptionKey: 'gaspareno.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/gaspareno/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/3.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/4.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/gaspareno/5.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 240,
    
        type: 'quiet_scenic',
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'gaspareno.tip',
        quickTipKey: 'gaspareno.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
        coordinates: {
            latitude: 23.183497599776093,
            longitude: -110.13937708465713,
        }
    },
    {
        id: '15',
        name: 'Las Playitas',
        displayNameKey: 'las_playitas.name',
        aliases: ['Las Playitas Beach', 'Playitas Todos Santos'],
    
        locationKey: 'las_playitas.location',
    
        categories: ['adventure', 'social'],
        tags: ['scenic', 'activities', 'windy'],
    
        priceLevel: 0,
    
        descriptionKey: 'las_playitas.description',
    
        images: [
            {
                source: require('../../assets/images/beaches/playitas/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/playitas/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/beaches/playitas/3.jpg'),
                credit: null,
            },

            {
                source: require('../../assets/images/beaches/playitas/4.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 90,
    
        type: 'lively_popular',
    
        highlight: {
            key: 'parking',
            value: 'limited'
        },
    
        tipKey: 'las_playitas.tip',
        quickTipKey: 'las_playitas.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
        coordinates: {
            latitude: 23.465893536167755,
            longitude: -110.25680314668121,
        }
    }
];