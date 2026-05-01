import { Place } from '../types/navigation';

export const museums: Place[] = [
    {
        id: '1',
        name: 'Museo de la Ballena',
        displayNameKey: 'whale_museum.name',
        aliases: ['Museo de la Ballena'],

        locationKey: 'whale_museum.location',

        categories: ['family', 'relax'],
        tags: ['indoor', 'educational'],

        priceLevel: 1,

        descriptionKey: 'whale_museum.description',

        images: [
            {
                source: require('../../assets/images/museums/whale/1.jpg'),
                credit: null,
            },
        ],

        fallbackMinutes: 10,

        type: 'indoor_educational',
        highlight: {
            key: 'entry',
            value: 'paid'
        },

        tipKey: 'whale_museum.tip',
        quickTipKey: 'whale_museum.quickTip',

        quickTipColor: 'rgba(100,100,100,0.8)',

        coordinates: {
            latitude: 24.1426,
            longitude: -110.3128,
        }
    }
]