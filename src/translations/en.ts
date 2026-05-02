const en = {
    // UI
    ui: {
        // General
        quickTip: 'Quick Tip',
        distance: '{{minutes}} min away',

        // HomeScreen.tsx
        home: {
            title: "Explore\nLa Paz",
            subtitle: "Discover beaches,\nculture and more",
            continue: "Continue",
        },

        // CategoryScreen.tsx
        browseAll: {
            beaches: 'Browse all beaches',
            museums: 'Browse all museums',
            viewpoints: 'Browse all viewpoints',
        },

        browseSubtitle: 'See all places and explore freely',

        category: {
            relax: 'Relax',
            family: 'Family',
            social: 'Social',
            adventure: 'Adventure',
        },

        categoryDescription: {
            relax: 'Calm beaches to unwind and disconnect',
            family: 'Safe, accessible beaches for all ages',
            social: 'Lively beaches with a vibrant atmosphere',
            adventure: 'Explore beaches with activities and nature',
        },

        placeType: {
            title: "Choose what\nto explore",

            beaches: 'Beaches',
            beachesSingular: 'beach',
            beachesPlural: 'beaches',
            beachesDesc: "Clear waters & soft sand",

            museums: 'Museums',
            museumsSingular: 'museum',
            museumsPlural: 'museums',
            museumsDesc: "History, culture & local identity",

            viewpoints: 'Viewpoints',
            viewpointsSingular: 'viewpoint',
            viewpointsPlural: 'viewpoints',
            viewpointsDesc: "Scenic views & sunset spots",
        },

        placeLabel: {
            beach: 'Beach',
            museum: 'Museum',
            viewpoint: 'Viewpoint',
        },

        // Hero.tsx
        hero: {
            title: {
                beaches: 'Find your\nperfect beach',
                museums: 'Discover culture and history',
                viewpoints: 'Enjoy scenic views and nature',
            },

            location: 'La Paz, Baja California Sur',
        },

        // RecommendationsScreen.tsx
        recommendationsTitle: '{{category}} spots near you',
        recommendationsSubtitle: 'Based on your location',

        // PlacesScreen.tsx
        searchPlaceholder: 'Search {{type}} (e.g. {{example}})',
        noResultsTitle: 'No {{type}} found',
        noResultsSubtitle: 'Try another search or explore nearby',
        resultsFor: 'results for',
        clearSearch: 'Clear search',

        // DetailScreen.tsx
        openMaps: 'Open route in Google Maps',
        getDirections: 'Get Directions',
        seeMore: 'See more',
        seeLess: 'See less',
    },

    // PLACES
    // BEACHES
    balandra: {
        name: 'Balandra Beach',
        location: 'Balandra Protected Area',
        description: 'A stunning beach known for its shallow, crystal-clear waters and unique sand formations. As a protected natural area, it offers a peaceful setting ideal for walking through the water, relaxing, and taking photos.',
        tip: 'Best before 11 AM, limited access later',
        quickTip: 'Visit during low tide to walk far into the shallow water.',
    },
    tecolote: {
        name: 'El Tecolote Beach',
        location: 'Balandra Area',
        description: 'A lively beach with calm waters and stunning views of Espíritu Santo Island. Known for its restaurants, water activities, and easy access, it’s a great spot to spend the day with food, music, and ocean views.',
        tip: 'Busy at midday, especially weekends',
        quickTip: 'Perfect starting point for Espíritu Santo island tours.',
    },
    coromuel: {
        name: 'El Coromuel Beach',
        location: 'Scenic Road',
        description: 'A convenient city beach with calm waters, clean public facilities, and easy access. Popular among locals, it’s ideal for a quick swim, relaxing break, or watching the sunset close to La Paz.',
        tip: 'Often crowded in the afternoon',
        quickTip: 'Great option if you want the beach without leaving the city.',
    },
    pichilingue: {
        name: 'Pichilingue Beach',
        location: 'Pichilingue Port',
        description: 'Known for its gentle waves and clear water, this beach sits near the ferry port while still offering a relaxed atmosphere. With nearby restaurants and easy access, it’s a great spot for swimming and unwinding.',
        tip: 'Some areas are near the ferry port',
        quickTip: 'Great balance between accessibility and a relaxed beach atmosphere.',
    },
    tesoro: {
        name: 'El Tesoro Beach',
        location: 'Pichilingue Area',
        description: 'Clear waters and a relaxed atmosphere make this a peaceful escape. Ideal for swimming, unwinding, and enjoying a quieter setting away from the crowds.',
        tip: 'Best in the morning for fewer people',
        quickTip: 'Perfect for swimming in calm, crystal-clear water.',
    },
    caimancito: {
        name: 'El Caimancito Beach',
        location: 'La Paz Bay',
        description: 'A small, laid-back beach with calm waters and a local feel. Perfect for a quick escape, enjoying the sunset, or relaxing by the sea without going far from the city.',
        tip: 'Best at sunset for great views',
        quickTip: 'Nice spot for a quick sunset break by the water.',
    },
    saltito: {
        name: 'El Saltito Beach',
        location: 'North of La Paz',
        description: 'Defined by its rocky formations and clear waters, this scenic beach offers a more natural and rugged setting. Ideal for snorkeling, relaxing, and exploring along the shoreline.',
        tip: 'Bring water shoes for the rocky areas',
        quickTip: 'Great spot for snorkeling near rocky areas.',
    },
    comitan: {
        name: 'El Comitán Beach',
        location: 'Northwest of La Paz',
        description: 'With gentle waves and a quiet, local atmosphere, this beach offers a simple and peaceful coastal experience. Ideal for swimming, resting, and enjoying the sea without the crowds.',
        tip: 'Usually calm and less crowded',
        quickTip: 'Nice spot for a quiet swim in calm water.',
    },
    concha: {
        name: 'La Concha Beach',
        location: 'Scenic Road',
        description: 'Located along the scenic road and near resort areas, this beach offers clear waters and a relaxed atmosphere. A comfortable spot for swimming, unwinding, and enjoying a quieter setting close to the city.',
        tip: 'Access depends by hotel zones',
        quickTip: 'A quieter option near the city with easy access.',
    },
    cruces: {
        name: 'Las Cruces Beach',
        location: 'Northeast of La Paz',
        description: 'Wide-open views and fewer crowds give this beach a peaceful, laid-back feel. Perfect for relaxing, taking in the scenery, and enjoying a quieter escape away from busy beaches.',
        tip: 'Less crowded during weekdays',
        quickTip: 'Great for a peaceful beach break away from the crowds.',
    },
    coyote: {
        name: 'Punta Coyote Beach',
        location: 'North of La Paz',
        description: 'A remote coastal spot with wide-open views and a raw, natural setting. Ideal for exploring, slowing down, and enjoying a quieter stretch of coastline.',
        tip: 'Very little shade during the day',
        quickTip: 'Bring water and sun protection for a more comfortable visit.',
    },
    muertitos: {
        name: 'Los Muertitos Beach',
        location: 'Northeast of La Paz',
        description: 'A remote beach with wide-open views and a quiet, untouched atmosphere. Ideal for disconnecting, exploring, and enjoying a more isolated coastal experience.',
        tip: 'Services are limited, bring supplies',
        quickTip: 'Great for disconnecting and enjoying wide coastal views.',
    },
    sargento: {
        name: 'El Sargento Beach',
        location: 'Southeast of La Paz',
        description: 'Defined by its open coastline and steady winds, this beach has a dynamic, outdoorsy feel. Known for kitesurfing, it’s perfect for exploring or enjoying the sea in a more active way.',
        tip: 'Windy conditions are very common',
        quickTip: 'Great for kitesurfing and long beach walks.',
    },
    gaspareno: {
        name: 'El Gaspareño Beach',
        location: 'South of La Paz',
        description: 'A lesser-known coastal spot with a calm, local atmosphere. Ideal for slowing down, walking along the shore, and enjoying a quieter stretch of coastline.',
        tip: 'Limited services available nearby',
        quickTip: 'Nice option for a quiet and relaxing walk by the sea.',
    },

    // MUSEUMS
    whale_museum: {
        name: 'Museo de la Ballena',
        location: 'La Paz Downtown',
        description: 'An interactive space dedicated to marine life, with a special focus on whales. Explore exhibits on their biology, conservation, and role in the region through an engaging and educational experience.',
        tip: 'Great for a short educational visit',
        quickTip: 'Great for families and a quick indoor visit.',
    },

    // VIEWPOINTS
    calavera: {
        name: 'Cerro de la Calavera',
        location: 'La Paz',
        description: 'A scenic hilltop viewpoint with panoramic views over La Paz and the sea. The short hike leads to one of the best spots in the city to watch the sunset and take in the landscape from above.',
        tip: 'Best visited at sunset time',
        quickTip: 'Best at sunset, bring water and good shoes.',
    },

    // TAGS
    tag: {
        scenic: 'Scenic',
        quiet: 'Quiet',
        shallow_water: 'Shallow water',
        food: 'Food',
        activities: 'Activities',
        boat_tours: 'Boat tours',
        urban: 'Urban',
        accessible: 'Accessible',
        quick_visit: 'Quick visit',
        family: 'Family',
        calm: 'Calm',
        windy: 'Windy',
        indoor: 'Indoor',
        educational: 'Educational',
        hiking: 'Hiking',
        sunset: 'Sunset',
    },

    // TYPE
    type: {
        quiet_scenic: 'Quiet & Scenic',
        lively_popular: 'Lively & Popular',
        urban_accessible: 'Urban & Accessible',
        calm_family: 'Calm & Family',

        indoor_educational: 'Indoor & Educational',
        cultural_historic: 'Cultural & Historic',
        interactive_family: 'Interactive & Family',
        
        scenic_hiking: 'Scenic & Hiking',
        sunset_scenic: 'Sunset & Scenic',
        elevated_views: 'Elevated & Scenic',
    },

    // HIGHLIGHT
    highlight: {
        // PARKING
        parking: {
            limited: 'Limited',
            available: 'Available',
        },
        entry: {
            free: 'Free Entry',
            paid: 'Paid Entry',
        },
        difficulty: {
            easy: 'Easy Hike',
            moderate: 'Moderate Hike',
            hard: 'Hard Hike',
        }
    },
};

export default en;