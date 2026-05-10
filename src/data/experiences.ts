import { ITEM_COLORS } from "../config/itemColors";
import { ExperienceItem } from "../types/item";

export const experiences: ExperienceItem[] = [
    {
        // Identity
        id: '1',
        itemType: 'experience',
        group: 'experiences',

        name: 'Sea Lion Snorkeling',
        displayNameKey: 'sea_lions.name',
        aliases: [
            'Sea Lion Tour', 
            'Snorkeling with Sea Lions', 
            'Los Islotes Tour'
        ],

        // Classification
        categories: ['adventure', 'social'],
        tags: ['activities', 'boat_tours', 'scenic'],
        type: 'wildlife_experience',

        // Metadata
        locationKey: 'sea_lions.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'sea_lions.description',
        tipKey: 'sea_lions.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/sea-lions/1.webp'),
                credit: {
                    author: 'Elianne Dipp',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sea-lions/2.webp'),
                credit: {
                    author: 'Elianne Dipp',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sea-lions/3.webp'),
                credit: {
                    author: 'Elianne Dipp',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sea-lions/4.webp'),
                credit: {
                    author: 'Josué Rodríguez',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., México',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '2',
        itemType: 'experience',
        group: 'experiences',

        name: 'Whale Shark Experience',
        displayNameKey: 'whale_shark.name',
        aliases: [
            'Whale Shark Tour', 
            'Swimming with Whale Sharks', 
            'Whale Shark Snorkeling'
        ],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'boat_tours'],
        type: 'wildlife_experience',

        // Metadata
        locationKey: 'whale_shark.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'whale_shark.description',
        tipKey: 'whale_shark.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/whale-shark/1.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-shark/2.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-shark/3.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-shark/4.webp'),
                credit: {
                    author: 'Abhi Verma',
                    source: 'Unsplash',
                    location: 'Mexicali, Baja California, Mexico',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '3',
        itemType: 'experience',
        group: 'experiences',

        name: 'Espiritu Santo Boat Tour',
        displayNameKey: 'espiritu_santo.name',
        aliases: [
            'Espiritu Santo Tour', 
            'Island Boat Tour', 
            'Espiritu Santo Island'
        ],

        // Classification
        categories: ['social', 'relax'],
        tags: ['boat_tours', 'scenic', 'activities'],
        type: 'ocean_adventure',

        // Metadata
        locationKey: 'espiritu_santo.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'espiritu_santo.description',
        tipKey: 'espiritu_santo.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'island',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/espiritu-santo/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/4.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/espiritu-santo/5.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '4',
        itemType: 'experience',
        group: 'experiences',

        name: 'Whale Watching',
        displayNameKey: 'whale_watching.name',
        aliases: [
            'Whale Watching Tour',
            'Gray Whale Watching',
            'Whale Watching Boat Tour',
        ],
    
        // Classification
        categories: ['relax', 'social'],
        tags: ['boat_tours', 'scenic', 'activities'],
        type: 'wildlife_experience',

        // Metadata
        locationKey: 'whale_watching.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'whale_watching.description',
        tipKey: 'whale_watching.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/whale-watching/1.webp'),
                credit: {
                    author: 'Carlos Reyes',
                    source: 'Unsplash',
                    location: 'BCS, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-watching/2.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'El Pescador, B.C., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-watching/3.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'El Pescador, B.C., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/whale-watching/4.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'El Pescador, B.C., Mexico',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '5',
        itemType: 'experience',
        group: 'experiences',

        name: 'Kitesurfing',
        displayNameKey: 'kitesurfing.name',
        aliases: [
            'Kiteboarding',
            'Kitesurf Tour',
            'La Ventana Kitesurfing',
        ],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['activities', 'windy', 'scenic'],
        type: 'ocean_adventure',

        // Metadata
        locationKey: 'kitesurfing.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'kitesurfing.description',
        tipKey: 'kitesurfing.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.WIND_BLUE,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'extreme',
        },

        // Timing
        fallbackMinutes: 52,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/kitesurfing/1.webp'),
            },
        ],

        // Location
        coordinates: {
            latitude: 24.050772581493614,
            longitude: -109.98858416864101,
        },
    },

    {
        // Identity
        id: '6',
        itemType: 'experience',
        group: 'experiences',

        name: 'Kayaking in Balandra',
        displayNameKey: 'balandra_kayaking.name',
        aliases: [
            'Balandra Kayak Tour',
            'Sea Kayaking',
            'Balandra Kayaking',
        ],

        // Classification
        categories: ['relax', 'adventure'],
        tags: ['activities', 'scenic', 'coastal'],
        type: 'ocean_adventure',

        // Metadata
        locationKey: 'balandra_kayaking.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'balandra_kayaking.description',
        tipKey: 'balandra_kayaking.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'coastal',
        },

        // Timing
        fallbackMinutes: 30,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/balandra-kayaking/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/balandra-kayaking/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/balandra-kayaking/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/balandra-kayaking/4.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        },
    },

    {
        // Identity
        id: '7',
        itemType: 'experience',
        group: 'experiences',

        name: 'Scuba Diving',
        displayNameKey: 'scuba_diving.name',
        aliases: [
            'Diving Tour',
            'Sea of Cortez Diving',
            'La Paz Diving',
        ],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'water'],
        type: 'ocean_adventure',

        // Metadata
        locationKey: 'scuba_diving.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'scuba_diving.description',
        tipKey: 'scuba_diving.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.DEEP_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'marine',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/scuba-diving/1.webp'),
                credit: {
                    author: 'Domingo Dias',
                    source: 'Unsplash',
                    location: 'San Miguel de Cozumel, Q.R., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/scuba-diving/2.webp'),
                credit: {
                    author: 'Matias Mango',
                    source: 'Unsplash',
                    location: 'San Miguel de Cozumel, Q.R., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/scuba-diving/3.webp'),
                credit: {
                    author: 'Harvey Clements',
                    source: 'Unsplash',
                    location: 'Isla Mujeres, Q.R., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/scuba-diving/4.webp'),
                credit: {
                    author: 'Christian Vergara',
                    source: 'Unsplash',
                    location: 'Puerto Morelos, Q.R., México',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '8',
        itemType: 'experience',
        group: 'experiences',

        name: 'Paddleboarding',
        displayNameKey: 'paddleboarding.name',
        aliases: [
            'SUP Tour',
            'Stand Up Paddle',
            'Paddle Board Tour',
        ],
    
        // Classification
        categories: ['relax', 'social'],
        tags: ['activities', 'scenic', 'coastal'],
        type: 'ocean_adventure',

        // Metadata
        locationKey: 'paddleboarding.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'paddleboarding.description',
        tipKey: 'paddleboarding.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'coastal',
        },

        // Timing
        fallbackMinutes: 4,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/paddleboarding/1.webp'),
                credit: {
                    author: 'Josh Withers',
                    source: 'Unsplash',
                    location: 'Cabo San Lucas, BCS, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/paddleboarding/2.webp'),
                credit: {
                    author: 'Camila Morini',
                    source: 'Unsplash',
                    location: null,
                },
            },
            {
                source: require('../../assets/images/experiences/paddleboarding/3.webp'),
                credit: {
                    author: 'Mafer Bravo',
                    source: 'Unsplash',
                    location: 'Heroica Veracruz, Ver., Mexico',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.155619066654573,
            longitude: -110.32268390505517,
        },
    },

    {
        // Identity
        id: '9',
        itemType: 'experience',
        group: 'experiences',

        name: 'Sport Fishing in La Paz',
        displayNameKey: 'sport_fishing.name',
        aliases: [
            'Fishing Charter',
            'Deep Sea Fishing',
            'Fishing Tour',
        ],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['activities', 'boat_tours', 'coastal'],
        type: 'ocean_adventure',

        // Metadata
        locationKey: 'sport_fishing.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'sport_fishing.description',
        tipKey: 'sport_fishing.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'ocean',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/sport-fishing/1.webp'),
                credit: {
                    author: 'Cast & Spear',
                    source: 'Unsplash',
                    location: 'Bahía de los Ángeles, Baja California, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sport-fishing/2.webp'),
                credit: {
                    author: 'Jose Ricardo Barraza Morachis',
                    source: 'Unsplash',
                    location: 'Altata, Sin., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/sport-fishing/3.webp'),
                credit: {
                    author: 'Gaspar Zaldo',
                    source: 'Unsplash',
                    location: null,
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '10',
        itemType: 'experience',
        group: 'experiences',

        name: 'Los Islotes Boat Tour',
        displayNameKey: 'los_islotes.name',
        aliases: [
            'Los Islotes Tour',
            'Island Boat Tour',
            'Sea Lion Island Tour',
        ],
    
        // Classification
        categories: ['relax', 'social'],
        tags: ['boat_tours', 'scenic', 'activities'],
        type: 'wildlife_experience',

        // Metadata
        locationKey: 'los_islotes.location',
        priceLevel: 3,

        // Content
        descriptionKey: 'los_islotes.description',
        tipKey: 'los_islotes.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.LOW_WATER,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'island',
        },

        // Timing
        fallbackMinutes: 15,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/los-islotes/1.webp'),
                credit: {
                    author: 'AlexisSalinas01',
                    source: 'Wikimedia Commons',
                    location: 'Los Islotes, Baja California Sur, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/los-islotes/2.webp'),
                credit: {
                    author: 'AlexisSalinas01',
                    source: 'Wikimedia Commons',
                    location: 'Los Islotes, Baja California Sur, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/los-islotes/3.webp'),
                credit: {
                    author: 'AlexisSalinas01',
                    source: 'Wikimedia Commons',
                    location: 'Los Islotes, Baja California Sur, Mexico',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },

    {
        // Identity
        id: '11',
        itemType: 'experience',
        group: 'experiences',

        name: 'Malecón Food Tour',
        displayNameKey: 'food_tour.name',
        aliases: [
            'Food Experience',
            'Street Food Tour',
            'Malecón Dining Tour',
        ],
    
        // Classification
        categories: ['social', 'relax'],
        tags: ['food', 'nightlife', 'cultural'],
        type: 'cultural_experience',

        // Metadata
        locationKey: 'food_tour.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'food_tour.description',
        tipKey: 'food_tour.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.SUNSET_GOLD,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'local_flavors',
        },

        // Timing
        fallbackMinutes: 4,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/food-tour/1.webp'),
                credit: {
                    author: 'Jesus Carlon',
                    source: 'Unsplash',
                    location: 'Tijuana, B.C., Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/food-tour/2.webp'),
                credit: {
                    author: 'AlejandroLinaresGarcia',
                    source: 'Wikimedia Commons',
                    location: 'Campeche, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/food-tour/3.webp'),
                credit: {
                    author: 'Jorge Fernández Salas',
                    source: 'Unsplash',
                    location: 'Tulum, México',
                },
            },
            {
                source: require('../../assets/images/experiences/food-tour/4.webp'),
                credit: {
                    author: 'ProtoplasmaKid',
                    source: 'Wikimedia Commons',
                    location: 'Malecón de La Paz, Baja California Sur, Mexico',
                },
            },
            {
                source: require('../../assets/images/experiences/food-tour/5.webp'),
                credit: {
                    author: 'ProtoplasmaKid',
                    source: 'Wikimedia Commons',
                    location: 'Malecón de La Paz, Baja California Sur, Mexico',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.155619066654573,
            longitude: -110.32268390505517,
        },
    },

    {
        // Identity
        id: '12',
        itemType: 'experience',
        group: 'experiences',

        name: 'Stargazing Experience',
        displayNameKey: 'stargazing.name',
        aliases: [
            'Night Sky Tour',
            'Stargazing Tour',
            'Astro Tourism',
        ],
    
        // Classification
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'outdoor', 'nightlife'],
        type: 'cultural_experience',

        // Metadata
        locationKey: 'stargazing.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'stargazing.description',
        tipKey: 'stargazing.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.NIGHT_SKY,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'scenic_nights',
        },

        // Timing
        fallbackMinutes: 31,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/stargazing/1.webp'),
                credit: {
                    author: 'Jezael Melgoza',
                    source: 'Unsplash',
                    location: 'La Paz, B.C.S., México',
                },
            },
            {
                source: require('../../assets/images/experiences/stargazing/2.webp'),
                credit: {
                    author: 'claudia lam',
                    source: 'Unsplash',
                    location: 'La Rumorosa, B.C., México',
                },
            },
            {
                source: require('../../assets/images/experiences/stargazing/3.webp'),
                credit: {
                    author: 'claudia lam',
                    source: 'Unsplash',
                    location: 'La Rumorosa, B.C., México',
                },
            },
            {
                source: require('../../assets/images/experiences/stargazing/4.webp'),
                credit: {
                    author: 'Juan Cipriano Esquer',
                    source: 'Unsplash',
                    location: 'Puerto Peñasco, Son., México',
                },
            },
            {
                source: require('../../assets/images/experiences/stargazing/5.webp'),
                credit: {
                    author: 'claudia lam',
                    source: 'Unsplash',
                    location: 'La Rumorosa, B.C., México',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.336326705782476,
            longitude: -110.31649229942073,
        },
    },

    {
        // Identity
        id: '13',
        itemType: 'experience',
        group: 'experiences',

        name: 'Cerro Calavera Hiking',
        displayNameKey: 'calavera_hiking.name',
        aliases: [
            'Sunset Hike',
            'Cerro Calavera Trail',
            'Calavera Hiking Tour',
        ],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['hiking', 'sunset', 'scenic'],
        type: 'scenic_hiking',

        // Metadata
        locationKey: 'calavera_hiking.location',
        priceLevel: 1,

        // Content
        descriptionKey: 'calavera_hiking.description',
        tipKey: 'calavera_hiking.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.SUNSET,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'sunset_hiking',
        },

        // Timing
        fallbackMinutes: 7,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/calavera-hiking/1.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/calavera-hiking/2.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/calavera-hiking/3.webp'),
                credit: null,
            },
            {
                source: require('../../assets/images/experiences/calavera-hiking/4.webp'),
                credit: null,
            },
        ],

        // Location
        coordinates: {
            latitude: 24.184870763378978,
            longitude: -110.30030334672823,
        },
    },

    {
        // Identity
        id: '14',
        itemType: 'experience',
        group: 'experiences',

        name: 'Mountain Biking',
        displayNameKey: 'mountain_biking.name',
        aliases: [
            'Bike Adventure',
            'Desert Biking',
            'Mountain Bike Tour',
        ],
    
        // Classification
        categories: ['adventure', 'social'],
        tags: ['outdoor', 'activities', 'scenic'],
        type: 'scenic_hiking',

        // Metadata
        locationKey: 'mountain_biking.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'mountain_biking.description',
        tipKey: 'mountain_biking.tip',

        // Experience
        duration: 'half_day',
        durationColor: ITEM_COLORS.EARTH,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'desert_adventure',
        },

        // Timing
        fallbackMinutes: 52,
        useFallbackOnly: false,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/mountain-biking/1.webp'),
                credit: {
                    author: 'Ramon Hernandez',
                    source: 'Unsplash',
                    location: 'México',
                },
            },
            {
                source: require('../../assets/images/experiences/mountain-biking/2.webp'),
                credit: {
                    author: 'Josué Rodríguez',
                    source: 'Unsplash',
                    location: 'San Luis Potosí, San Luis Potosí, México',
                },
            },
            {
                source: require('../../assets/images/experiences/mountain-biking/3.webp'),
                credit: {
                    author: 'Magaly Taboada',
                    source: 'Unsplash',
                    location: 'Mexico',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 24.045907018517042,
            longitude: -110.0679277994847,
        },
    },

    {
        // Identity
        id: '15',
        itemType: 'experience',
        group: 'experiences',

        name: 'Todos Santos Day Trip',
        displayNameKey: 'todos_santos.name',
        aliases: [
            'Todos Santos Tour',
            'Pueblo Mágico Tour',
            'Todos Santos Excursion',
        ],
    
        // Classification
        categories: ['social', 'relax'],
        tags: ['cultural', 'food', 'scenic'],
        type: 'cultural_experience',

        // Metadata
        locationKey: 'todos_santos.location',
        priceLevel: 2,

        // Content
        descriptionKey: 'todos_santos.description',
        tipKey: 'todos_santos.tip',

        // Experience
        duration: 'full_day',
        durationColor: ITEM_COLORS.SUNSET_GOLD,

        // Highlight
        highlight: {
            key: 'experience',
            value: 'cultural_escape',
        },

        // Timing
        fallbackMinutes: 77,
        useFallbackOnly: true,

        // Media
        images: [
            {
                source: require('../../assets/images/experiences/todos-santos/1.webp'),
                credit: {
                    author: 'panza.rayada',
                    source: 'Wikimedia Commons',
                    location: 'Todos Santos, Baja California Sur, México',
                },
            },
            {
                source: require('../../assets/images/experiences/todos-santos/2.webp'),
                credit: {
                    author: 'Legion007k',
                    source: 'Wikimedia Commons',
                    location: 'Todos Santos, Baja California Sur, México',
                },
            },
            {
                source: require('../../assets/images/experiences/todos-santos/3.webp'),
                credit: {
                    author: 'Andrea Tosatto',
                    source: 'Wikimedia Commons',
                    location: 'Todos Santos, Baja California Sur, México',
                },
            },
            {
                source: require('../../assets/images/experiences/todos-santos/4.webp'),
                credit: {
                    author: 'Sharon Hahn Darlin',
                    source: 'Wikimedia Commons',
                    location: 'Todos Santos, Baja California Sur, México',
                },
            },
            {
                source: require('../../assets/images/experiences/todos-santos/5.webp'),
                credit: {
                    author: 'stekkelpak',
                    source: 'Wikimedia Commons',
                    location: 'Todos Santos, Baja California Sur, México',
                },
            },
        ],

        // Location
        coordinates: {
            latitude: 23.448875080726292,
            longitude: -110.22568993670625,
        },
    },
];