import { PLACE_COLORS } from '../config/placeColors';
import { Place } from '../types/navigation';

export const museums: Place[] = [
    {
        id: '1',
        name: 'Museo de la Ballena',
        displayNameKey: 'whale_museum.name',
        aliases: ['Museo de la Ballena'],

        locationKey: 'whale_museum.location',

        categories: ['family', 'relax'],
        tags: ['indoor', 'educational', 'quick_visit'],

        priceLevel: 1,

        descriptionKey: 'whale_museum.description',

        images: [
            {
                source: require('../../assets/images/museums/whale/1.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/whale/2.jpg'),
                credit: null,
            },
            {
                source: require('../../assets/images/museums/whale/3.jpg'),
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

        quickTipColor: PLACE_COLORS.NEUTRAL_DARK,

        coordinates: {
            latitude: 24.147579690336816,
            longitude: -110.31848900431005,
        }
    }
]