import { Image } from 'expo-image';
import { CATEGORY_CONFIG } from '../config/categoryConfig';
import { PLACE_TYPES } from '../config/placeTypes';
import { PLACE_TYPE_SCREEN } from '../config/uiConfig';

export async function preloadImages() {
    const images: any[] = [];

    images.push(PLACE_TYPE_SCREEN.hero);

    PLACE_TYPES.forEach((type) => {
        images.push(type.image.source);
    });

    Object.values(CATEGORY_CONFIG).forEach((cat) => {
        images.push(cat.image.source);
    });

    await Promise.all(
        images.map((img) => Image.prefetch(img))
    )
}