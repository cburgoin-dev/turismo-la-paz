import { IMAGE_CREDITS } from '../credits';
import { ImageAsset, ItemGroup } from '../types/item';
import { RootStackParamList } from '../types/navigation';

type ItemGroupConfig = {
    key: ItemGroup;

    titleKey: string;
    subtitleKey: string;

    example: string;

    route: 'Categories' | 'Items';

    params: RootStackParamList['Categories']
        | RootStackParamList['Items'];

    hasCategories: boolean;

    image: ImageAsset;
};

export const ITEM_GROUPS: readonly ItemGroupConfig[] = [
    {
        key: 'beaches',
        
        titleKey: 'ui.group.beaches',
        subtitleKey: 'ui.group.beachesDesc',

        example: 'Balandra',

        route: 'Categories',
        params: { group: 'beaches' },

        hasCategories: true,

        image: {
            source: require('../../assets/images/beaches/hero/1.webp'),
            credit: IMAGE_CREDITS.beachesHero,   
        },
    },

    {
        key: 'experiences',

        titleKey: 'ui.group.experiences',
        subtitleKey: 'ui.group.experiencesDesc',

        example: 'Snorkeling',

        route: 'Items',
        params: { group: 'experiences' },

        hasCategories: false,

        image: {
            source: require('../../assets/images/experiences/hero/1.webp'),
            credit: {
                author: 'Harvey Clements',
                source: 'Unsplash',
                location: 'San Miguel de Cozumel, Q.R., Mexico',
            },
        },
    },

    {
        key: 'museums',

        titleKey: 'ui.group.museums',
        subtitleKey: 'ui.group.museumsDesc',
        
        example: 'Museo del Arte',

        route: 'Items',
        params: { group: 'museums' },

        hasCategories: false,

        image: {
            source: require('../../assets/images/museums/hero/1.webp'),
            credit: null,
        },
    },

    {
        key: 'viewpoints',

        titleKey: 'ui.group.viewpoints',
        subtitleKey: 'ui.group.viewpointsDesc',

        example: 'Malecón',

        route: 'Items',
        params: { group: 'viewpoints' },

        hasCategories: false,

        image: {
            source: require('../../assets/images/viewpoints/hero/2.webp'),
            credit: {
                author: 'Andrea Hinojosa',
                source: 'Pexels',
                location: 'Baja California Sur, Mexico',
            },
        },
    },
] as const;