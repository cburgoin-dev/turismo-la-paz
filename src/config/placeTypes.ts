import { IMAGE_CREDITS } from '../credits';
import { PlaceType } from '../types/navigation';

export const PLACE_TYPES = [
    {
        key: 'beaches' as PlaceType,
        image: {
            source: require('../../assets/images/beaches/hero/1.webp'),
            credit: IMAGE_CREDITS.beachesHero,   
        },
        example: 'Balandra',

        titleKey: 'ui.placeType.beaches',
        subtitleKey: 'ui.placeType.beachesDesc',

        route: 'Categories',
        params: { placeType: 'beaches' as PlaceType },

        hasCategories: true,
    },
    {
        key: 'experiences' as PlaceType,

        image: {
            source: require('../../assets/images/experiences/hero/1.webp'),
            credit: {
                author: 'Harvey Clements',
                source: 'Unsplash',
                location: 'San Miguel de Cozumel, Q.R., Mexico',
            },
        },

        example: 'Snorkeling',

        titleKey: 'ui.placeType.experiences',
        subtitleKey: 'ui.placeType.experiencesDesc',

        route: 'Places',

        params: {
            placeType: 'experiences' as PlaceType
        },

        hasCategories: false,
    },
    {
        key: 'museums' as PlaceType,
        image: {
            source: require('../../assets/images/museums/hero/1.webp'),
            credit: null,
        },
        example: 'Museo del Arte',

        titleKey: 'ui.placeType.museums',
        subtitleKey: 'ui.placeType.museumsDesc',

        route: 'Places',
        params: { placeType: 'museums' as PlaceType },

        hasCategories: false,
    },
    {
        key: 'viewpoints' as PlaceType,
        image: {
            source: require('../../assets/images/viewpoints/hero/2.webp'),
            credit: {
                author: 'Andrea Hinojosa',
                source: 'Pexels',
                location: 'Baja California Sur, Mexico',
            },
        },
        example: 'Malecón',

        titleKey: 'ui.placeType.viewpoints',
        subtitleKey: 'ui.placeType.viewpointsDesc',

        route: 'Places',
        params: { placeType: 'viewpoints' as PlaceType },

        hasCategories: false,
    },
] as const;