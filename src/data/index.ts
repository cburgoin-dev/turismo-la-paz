import { Item, ItemGroup } from '../types/item';

import { beaches } from './beaches';
import { experiences } from './experiences';
import { museums } from './museums';
import { viewpoints } from './viewpoints';

export const itemsByGroup: Record<ItemGroup, Item[]> = {
    beaches,
    museums,
    viewpoints,
    experiences,
};

