import { ImageSourcePropType } from 'react-native';

import { CategoryKey } from '../config/categoryConfig';

// SHARED TYPES
export type Coordinates = {
    latitude: number;
    longitude: number;
};

export type ImageCredit = {
    author: string;
    source: string;
    location?: string | null;
}

export type ImageAsset = {
    source: ImageSourcePropType;
    credit?: ImageCredit | string | null;
};

export type ItemHighlight = {
    key: HighlightKey;
    value: string;
};

export type DistanceMetadata = {
    distanceValue: number | null;
    distance: string;
    showCity?: boolean;
};

// ENUM-LIKE UNION TYPES
export type ItemGroup = 
    | 'beaches' 
    | 'museums' 
    | 'viewpoints'
    | 'experiences';

export type ItemType = 
    | 'place'
    | 'experience';

export type ItemTypeKey =
    | 'quiet_scenic'
    | 'lively_popular'
    | 'urban_accessible'
    | 'calm_family'
    | 'indoor_educational'
    | 'cultural_historic'
    | 'interactive_family'
    | 'scenic_hiking'
    | 'sunset_scenic'
    | 'elevated_views'
    | 'ocean_adventure'
    | 'wildlife_experience'
    | 'cultural_experience';

export type HighlightKey = 
    | 'parking'
    | 'entry'
    | 'viewpoint'
    | 'experience';

export type ExperienceDuration = 
    | 'half_day'
    | 'full_day';

export type PriceLevel = 0 | 1 | 2 | 3;

// BASE ITEM
export type BaseItem = {
    // Identity
    id: string;
    itemType: ItemType;
    group: ItemGroup;

    // Display
    name: string;
    displayNameKey: string;
    aliases: string[];

    locationKey: string;
    descriptionKey: string;

    // Categorization
    categories: CategoryKey[];
    tags: string[];
    type: ItemTypeKey;

    // Metadata
    priceLevel: PriceLevel;
    highlight: ItemHighlight;

    // Media
    images: ImageAsset[];

    // Location / travel
    coordinates: Coordinates;

    fallbackMinutes: number;
    useFallbackOnly: boolean;

    // UI content
    tipKey: string;

    quickTipKey?: string;
    quickTipColor?: string;
};

// ITEM VARIANTS
export type PlaceItem = BaseItem & {
    itemType: 'place';
}

export type ExperienceItem = BaseItem & {
    itemType: 'experience';

    duration: ExperienceDuration;
    durationColor: string;
}

// FINAL TYPES
export type Item = 
    | PlaceItem 
    | ExperienceItem;

export type ItemWithDistance = 
    Item & DistanceMetadata;

export type ExperienceItemWithDistance =
    ExperienceItem & DistanceMetadata;