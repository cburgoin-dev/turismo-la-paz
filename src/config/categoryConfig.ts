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
                author: 'Sergio R. Ortiz',
                source: 'Unsplash',
                location: 'Cozumel, Mexico',
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
                author: 'Alejandro De Casso',
                source: 'Unsplash',
                location: 'La Paz, BCS',
            }
        },
        titleKey: 'ui.category.social',
        descriptionKey: 'ui.categoryDescription.social',
    },
    adventure: {
        image: {
            source: require('../../assets/images/beaches/categories/4.webp'),
            credit: {
                author: 'Kelsey Booth',
                source: 'Unsplash',
                location: 'Baja California Peninsula',
            }
        },
        titleKey: 'ui.category.adventure',
        descriptionKey: 'ui.categoryDescription.adventure',
    },
};