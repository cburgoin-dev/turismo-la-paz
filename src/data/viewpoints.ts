import { Place } from '../types/navigation';

export const viewpoints: Place[] = [
    {
        id: '1',
        name: 'Cerro de la Calavera',
        displayNameKey: 'calavera.name',
        aliases: ['Cerro de la Calavera'],

        locationKey: 'calavera.location',

        categories: ['adventure', 'relax'],
        tags: ['scenic', 'hiking'],

        priceLevel: 0,

        descriptionKey: 'calavera.description',

        images: [
            {
                source: require('../../assets/images/viewpoints/calavera/1.jpg'),
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

        quickTipColor: 'rgba(194,163,123,0.9)',

        coordinates: {
            latitude: 24.159,
            longitude: -110.305,
        }
    }
]