import { CategoryKey } from '../config/categoryConfig';
import { ItemGroup, ItemWithDistance } from './item';

export type RootStackParamList = {
    Home: undefined;
    Group: undefined;

    Categories: {
        group: ItemGroup;
    };

    Recommendations: { 
        group: ItemGroup;
        category: CategoryKey;
        preloadedItems?: ItemWithDistance[];
    };

    Items: {
        group: ItemGroup;
        preloadedItems?: ItemWithDistance[];
    };
    
    Detail: { 
        item: ItemWithDistance 
    };
};