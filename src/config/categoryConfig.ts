import { ImageAsset } from '../types/navigation';

export type CategoryKey = 
    | 'relax' 
    | 'family' 
    | 'social' 
    | 'adventure';

export const CATEGORY_CONFIG: Record<CategoryKey, {
    image: ImageAsset;
    titleKey: string;
    descriptionKey: string;
}> = {
    relax: {
        image: {
            source: require('../../assets/images/beaches/categories/1.webp'),
            credit: {
                author: 'Ava Filan',
                source: 'Unsplash',
                location: 'Los Cabos, Baja California Sur, Mexico',
            }
        },
        titleKey: 'ui.category.relax',
        descriptionKey: 'ui.categoryDescription.relax',
    },
    family: {
        image: {
            source: require('../../assets/images/beaches/categories/2.webp'),
            credit: {
                author: 'Linh Nguyen',
                source: 'Unsplash',
                location: null,
            }
        },
        titleKey: 'ui.category.family',
        descriptionKey: 'ui.categoryDescription.family',
    },
    social: {
        image: {
            source: require('../../assets/images/beaches/categories/3.webp'),
            credit: {
                author: 'Ben Turnbull',
                source: 'Unsplash',
                location: 'Puerto Escondido, Mexico',
            }
        },
        titleKey: 'ui.category.social',
        descriptionKey: 'ui.categoryDescription.social',
    },
    adventure: {
        image: {
            source: require('../../assets/images/beaches/categories/4.webp'),
            credit: {
                author: 'Lio Voo',
                source: 'Unsplash',
                location: null,
            }
        },
        titleKey: 'ui.category.adventure',
        descriptionKey: 'ui.categoryDescription.adventure',
    },
};