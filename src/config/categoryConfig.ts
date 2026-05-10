import { ImageAsset } from '../types/item';

export type CategoryKey = 
    | 'relax' 
    | 'family' 
    | 'social' 
    | 'adventure';

type CategoryConfig = {
    image: ImageAsset;
    titleKey: string;
    descriptionKey: string;
}

export const CATEGORY_CONFIG: Record<CategoryKey, CategoryConfig> = {
    relax: {
        titleKey: 'ui.category.relax',
        descriptionKey: 'ui.categoryDescription.relax',

        image: {
            source: require('../../assets/images/beaches/categories/1.webp'),
            credit: {
                author: 'Ava Filan',
                source: 'Unsplash',
                location: 'Los Cabos, Baja California Sur, Mexico',
            }
        },
    },

    family: {
        titleKey: 'ui.category.family',
        descriptionKey: 'ui.categoryDescription.family',

        image: {
            source: require('../../assets/images/beaches/categories/2.webp'),
            credit: {
                author: 'Linh Nguyen',
                source: 'Unsplash',
                location: null,
            }
        },
    },

    social: {
        titleKey: 'ui.category.social',
        descriptionKey: 'ui.categoryDescription.social',

        image: {
            source: require('../../assets/images/beaches/categories/3.webp'),
            credit: {
                author: 'Ben Turnbull',
                source: 'Unsplash',
                location: 'Puerto Escondido, Mexico',
            }
        },
    },
    
    adventure: {
        titleKey: 'ui.category.adventure',
        descriptionKey: 'ui.categoryDescription.adventure',

        image: {
            source: require('../../assets/images/beaches/categories/4.webp'),
            credit: {
                author: 'Lio Voo',
                source: 'Unsplash',
                location: null,
            }
        },
    },
};