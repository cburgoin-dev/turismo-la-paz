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
                source: require('../../assets/images/viewpoints/calavera/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/calavera/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/viewpoints/calavera/3.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 15,

        type: 'scenic_hiking',
        highlight: {
            key: 'difficulty',
            value: 'moderate',
        },

        tipKey: 'calavera.tip',
        quickTipKey: 'calavera.quickTip',

        quickTipColor: PLACE_COLORS.SAND,

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
                source: require('../../assets/images/viewpoints/atravesado/1.jpg'),
                credit: null,
            },
        ],
    
        fallbackMinutes: 10,
    
        type: 'scenic_hiking',
    
        highlight: {
            key: 'difficulty',
            value: 'easy',
        },
    
        tipKey: 'atravesado.tip',
        quickTipKey: 'atravesado.quickTip',
    
        quickTipColor: PLACE_COLORS.SAND,
    
        coordinates: {
            latitude: 24.130841569713088,
            longitude: -110.27771170424438,
        }
    }
]