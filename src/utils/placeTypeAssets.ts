import { PlaceType } from '../types/navigation';

export const PLACE_TYPE_ASSETS: Record< 
    PlaceType,
    { hero: any }
> = {
    beaches: {
        hero: require('../../assets/images/beaches/hero/1.jpg'),
    },
    museums: {
        hero: require('../../assets/images/museums/hero/1.jpg'),
    },
    viewpoints: {
        hero: require('../../assets/images/viewpoints/hero/3.jpg'),
    },
};