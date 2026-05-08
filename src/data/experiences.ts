import { PLACE_COLORS } from "../config/placeColors";
import { Place } from "../types/navigation";

export const experiences: Place[] = [
    {
        id: '1',
        name: 'Sea Lion Snorkeling',
        displayNameKey: 'sea_lions.name',
        aliases: ['Sea Lion Tour', 'Snorkeling with Sea Lions', 'Los Islotes Tour'],

        locationKey: 'sea_lions.location',

        categories: ['adventure', 'social'],
        tags: ['activities', 'boat_tours', 'scenic'],

        priceLevel: 3,

        descriptionKey: 'sea_lions.description',

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

        fallbackMinutes: 15,
        useFallbackOnly: false,

        type: 'wildlife_experience',

        duration: 'full_day',
        durationColor: PLACE_COLORS.DEEP_WATER,

        highlight: {
            key: 'experience',
            value: 'wildlife',
        },

        tipKey: 'sea_lions.tip',

        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '2',
        name: 'Whale Shark Experience',
        displayNameKey: 'whale_shark.name',
    
        aliases: ['Whale Shark Tour', 'Swimming with Whale Sharks', 'Whale Shark Snorkeling'],
    
        locationKey: 'whale_shark.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'boat_tours'],
    
        priceLevel: 3,
    
        descriptionKey: 'whale_shark.description',
    
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
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'wildlife_experience',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.DEEP_WATER,
    
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },
    
        tipKey: 'whale_shark.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '3',
        name: 'Espiritu Santo Boat Tour',
        displayNameKey: 'espiritu_santo.name',
    
        aliases: ['Espiritu Santo Tour', 'Island Boat Tour','Espiritu Santo Island'],
    
        locationKey: 'espiritu_santo.location',
    
        categories: ['social', 'relax'],
        tags: ['boat_tours', 'scenic', 'activities'],
    
        priceLevel: 3,
    
        descriptionKey: 'espiritu_santo.description',
    
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
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'island',
        },
    
        tipKey: 'espiritu_santo.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '4',
        name: 'Whale Watching',
        displayNameKey: 'whale_watching.name',
    
        aliases: [
            'Whale Watching Tour',
            'Gray Whale Watching',
            'Whale Watching Boat Tour',
        ],
    
        locationKey: 'whale_watching.location',
    
        categories: ['relax', 'social'],
        tags: ['boat_tours', 'scenic', 'activities'],
    
        priceLevel: 3,
    
        descriptionKey: 'whale_watching.description',
    
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
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'wildlife_experience',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'wildlife',
        },
    
        tipKey: 'whale_watching.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '5',
        name: 'Kitesurfing',
        displayNameKey: 'kitesurfing.name',
        aliases: [
            'Kiteboarding',
            'Kitesurf Tour',
            'La Ventana Kitesurfing',
        ],
    
        locationKey: 'kitesurfing.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'windy', 'scenic'],
    
        priceLevel: 3,
    
        descriptionKey: 'kitesurfing.description',
    
        images: [
            {
                source: require('../../assets/images/experiences/kitesurfing/1.webp'),
            },
        ],
    
        fallbackMinutes: 52,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.WIND_BLUE,
    
        highlight: {
            key: 'experience',
            value: 'extreme',
        },
    
        tipKey: 'kitesurfing.tip',
    
        coordinates: {
            latitude: 24.050772581493614,
            longitude: -109.98858416864101,
        },
    },
    {
        id: '6',
        name: 'Kayaking in Balandra',
        displayNameKey: 'balandra_kayaking.name',
    
        aliases: [
            'Balandra Kayak Tour',
            'Sea Kayaking',
            'Balandra Kayaking',
        ],
    
        locationKey: 'balandra_kayaking.location',
    
        categories: ['relax', 'adventure'],
        tags: ['activities', 'scenic', 'coastal'],
    
        priceLevel: 2,
    
        descriptionKey: 'balandra_kayaking.description',
    
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
    
        fallbackMinutes: 30,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'coastal',
        },
    
        tipKey: 'balandra_kayaking.tip',
    
        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        }
    },
    {
        id: '7',
        name: 'Scuba Diving',
        displayNameKey: 'scuba_diving.name',
    
        aliases: [
            'Diving Tour',
            'Sea of Cortez Diving',
            'La Paz Diving',
        ],
    
        locationKey: 'scuba_diving.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'scenic', 'water'],
    
        priceLevel: 3,
    
        descriptionKey: 'scuba_diving.description',
    
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
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.DEEP_WATER,
    
        highlight: {
            key: 'experience',
            value: 'marine',
        },
    
        tipKey: 'scuba_diving.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '8',
        name: 'Paddleboarding',
        displayNameKey: 'paddleboarding.name',
    
        aliases: [
            'SUP Tour',
            'Stand Up Paddle',
            'Paddle Board Tour',
        ],
    
        locationKey: 'paddleboarding.location',
    
        categories: ['relax', 'social'],
        tags: ['activities', 'scenic', 'coastal'],
    
        priceLevel: 2,
    
        descriptionKey: 'paddleboarding.description',
    
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
    
        fallbackMinutes: 4,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'coastal',
        },
    
        tipKey: 'paddleboarding.tip',
    
        coordinates: {
            latitude: 24.155619066654573,
            longitude: -110.32268390505517,
        },
    },
    {
        id: '9',
        name: 'Sport Fishing in La Paz',
        displayNameKey: 'sport_fishing.name',
    
        aliases: [
            'Fishing Charter',
            'Deep Sea Fishing',
            'Fishing Tour',
        ],
    
        locationKey: 'sport_fishing.location',
    
        categories: ['adventure', 'social'],
        tags: ['activities', 'boat_tours', 'coastal'],
    
        priceLevel: 3,
    
        descriptionKey: 'sport_fishing.description',
    
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
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'ocean_adventure',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'ocean',
        },
    
        tipKey: 'sport_fishing.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '10',
        name: 'Los Islotes Boat Tour',
        displayNameKey: 'los_islotes.name',
    
        aliases: [
            'Los Islotes Tour',
            'Island Boat Tour',
            'Sea Lion Island Tour',
        ],
    
        locationKey: 'los_islotes.location',
    
        categories: ['relax', 'social'],
        tags: ['boat_tours', 'scenic', 'activities'],
    
        priceLevel: 3,
    
        descriptionKey: 'los_islotes.description',
    
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
    
        fallbackMinutes: 15,
        useFallbackOnly: false,
    
        type: 'wildlife_experience',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.LOW_WATER,
    
        highlight: {
            key: 'experience',
            value: 'island',
        },
    
        tipKey: 'los_islotes.tip',
    
        coordinates: {
            latitude: 24.125235358602314,
            longitude: -110.34624770673152,
        },
    },
    {
        id: '11',
        name: 'Malecón Food Tour',
        displayNameKey: 'food_tour.name',
    
        aliases: [
            'Food Experience',
            'Street Food Tour',
            'Malecón Dining Tour',
        ],
    
        locationKey: 'food_tour.location',
    
        categories: ['social', 'relax'],
        tags: ['food', 'nightlife', 'cultural'],
    
        priceLevel: 2,
    
        descriptionKey: 'food_tour.description',
    
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
    
        fallbackMinutes: 4,
        useFallbackOnly: false,
    
        type: 'cultural_experience',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.SUNSET_GOLD,
    
        highlight: {
            key: 'experience',
            value: 'local_flavors',
        },
    
        tipKey: 'food_tour.tip',
    
        coordinates: {
            latitude: 24.155619066654573,
            longitude: -110.32268390505517,
        },
    },
    {
        id: '12',
        name: 'Stargazing Experience',
        displayNameKey: 'stargazing.name',
    
        aliases: [
            'Night Sky Tour',
            'Stargazing Tour',
            'Astro Tourism',
        ],
    
        locationKey: 'stargazing.location',
    
        categories: ['relax', 'adventure'],
        tags: ['scenic', 'outdoor', 'nightlife'],
    
        priceLevel: 2,
    
        descriptionKey: 'stargazing.description',
    
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
    
        fallbackMinutes: 31,
        useFallbackOnly: false,
    
        type: 'cultural_experience',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.NIGHT_SKY,
    
        highlight: {
            key: 'experience',
            value: 'scenic_nights',
        },
    
        tipKey: 'stargazing.tip',
    
        coordinates: {
            latitude: 24.336326705782476,
            longitude: -110.31649229942073,
        }
    },
    {
        id: '13',
        name: 'Cerro Calavera Hiking',
        displayNameKey: 'calavera_hiking.name',
    
        aliases: [
            'Sunset Hike',
            'Cerro Calavera Trail',
            'Calavera Hiking Tour',
        ],
    
        locationKey: 'calavera_hiking.location',
    
        categories: ['adventure', 'social'],
        tags: ['hiking', 'sunset', 'scenic'],
    
        priceLevel: 1,
    
        descriptionKey: 'calavera_hiking.description',
    
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
    
        fallbackMinutes: 7,
        useFallbackOnly: false,
    
        type: 'scenic_hiking',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.SUNSET,
    
        highlight: {
            key: 'experience',
            value: 'sunset_hiking',
        },
    
        tipKey: 'calavera_hiking.tip',
    
        coordinates: {
            latitude: 24.184870763378978,
            longitude: -110.30030334672823,
        },
    },
    {
        id: '14',
        name: 'Mountain Biking',
        displayNameKey: 'mountain_biking.name',
    
        aliases: [
            'Bike Adventure',
            'Desert Biking',
            'Mountain Bike Tour',
        ],
    
        locationKey: 'mountain_biking.location',
    
        categories: ['adventure', 'social'],
        tags: ['outdoor', 'activities', 'scenic'],
    
        priceLevel: 2,
    
        descriptionKey: 'mountain_biking.description',
    
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
    
        fallbackMinutes: 52,
        useFallbackOnly: false,
    
        type: 'scenic_hiking',
    
        duration: 'half_day',
        durationColor: PLACE_COLORS.EARTH,
    
        highlight: {
            key: 'experience',
            value: 'desert_adventure',
        },
    
        tipKey: 'mountain_biking.tip',
    
        coordinates: {
            latitude: 24.045907018517042,
            longitude: -110.0679277994847,
        },
    },
    {
        id: '15',
        name: 'Todos Santos Day Trip',
        displayNameKey: 'todos_santos.name',
    
        aliases: [
            'Todos Santos Tour',
            'Pueblo Mágico Tour',
            'Todos Santos Excursion',
        ],
    
        locationKey: 'todos_santos.location',
    
        categories: ['social', 'relax'],
        tags: ['cultural', 'food', 'scenic'],
    
        priceLevel: 2,
    
        descriptionKey: 'todos_santos.description',
    
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
    
        fallbackMinutes: 77,
        useFallbackOnly: true,
    
        type: 'cultural_experience',
    
        duration: 'full_day',
        durationColor: PLACE_COLORS.SUNSET_GOLD,
    
        highlight: {
            key: 'experience',
            value: 'cultural_escape',
        },
    
        tipKey: 'todos_santos.tip',
    
        coordinates: {
            latitude: 23.448875080726292,
            longitude: -110.22568993670625,
        },
    },
]