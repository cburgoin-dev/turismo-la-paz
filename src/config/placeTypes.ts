import { IMAGE_CREDITS } from '../credits';
import { PlaceType } from '../types/navigation';

export const PLACE_TYPES = [
    {
        key: 'beaches' as PlaceType,
        image: {
            source: require('../../assets/images/beaches/hero/1.jpg'),
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
        key: 'museums' as PlaceType,
        image: {
            source: require('../../assets/images/museums/hero/1.jpg'),
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
            source: require('../../assets/images/viewpoints/hero/3.jpg'),
            credit: null,
        },
        example: 'Cerro Calavera',

        titleKey: 'ui.placeType.viewpoints',
        subtitleKey: 'ui.placeType.viewpointsDesc',

        route: 'Places',
        params: { placeType: 'viewpoints' as PlaceType },

        hasCategories: false,
    }
] as const;