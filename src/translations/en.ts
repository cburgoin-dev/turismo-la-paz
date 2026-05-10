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
            experiences: 'Explore all experiences',
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

        group: {
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

            experiences: 'Experiences',
            experiencesSingular: 'experience',
            experiencesPlural: 'experiences',
            experiencesDesc: 'Tours, wildlife & outdoor adventures',
        },

        itemLabel: {
            beach: 'Beach',
            museum: 'Museum',
            viewpoint: 'Viewpoint',
            experience: 'Experience',
        },

        // Hero.tsx
        hero: {
            title: {
                beaches: 'Find your\nperfect beach',
                museums: 'Discover culture and history',
                viewpoints: 'Enjoy scenic views and nature',
                experiences: 'Live unforgettable\nexperiences',
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
        seeMore: 'See more',
        seeLess: 'See less',
        openMaps: 'Open route in Google Maps',
        getDirections: 'Get directions',
        viewMeetingPoint: 'View meeting point',
    },

    // ITEMS

    // -------------------------------------
    // BEACHES
    // -------------------------------------
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
    las_playitas: {
        name: 'Las Playitas',
        location: 'Todos Santos',
        description: 'Known for its stronger waves and open Pacific coastline, this beach offers a more raw and energetic experience. Ideal for surfing, long walks, and enjoying dramatic sunsets away from calmer bay waters.',
        tip: 'Strong waves, not ideal for swimming',
        quickTip: 'Great for sunsets and long beach walks.',
    },

    // -------------------------------------
    // EXPERIENCES
    // -------------------------------------
    sea_lions: {
        name: 'Snorkeling with Sea Lions',
        location: 'Los Islotes / Espíritu Santo Area',
        description: 'One of the most iconic experiences in La Paz. Swim and snorkel near playful sea lions in the crystal-clear waters around Los Islotes, surrounded by dramatic island landscapes and marine life.',
        tip: 'Best in calm morning conditions',
    },
    whale_shark: {
        name: 'Snorkeling with Whale Sharks',
        location: 'La Paz Bay',
        description: 'A unique wildlife experience in the calm waters of La Paz Bay. Swim near gentle whale sharks while exploring one of the few places in the world where these massive marine animals can be observed up close.',
        tip: 'Only available during season',
    },
    espiritu_santo: {
        name: 'Espiritu Santo Boat Tour',
        location: 'Espiritu Santo Island Area',
        description: 'Discover the turquoise waters and volcanic landscapes of Espiritu Santo Island on a full-day boat adventure with beaches, snorkeling, and scenic coastal views.',
        tip: 'Bring sunscreen and extra water',
    },
    whale_watching: {
        name: 'Whale Watching',
        location: 'La Paz Bay',
        description: 'Experience whale watching near La Paz while exploring the rich marine life of the region. Seasonal tours offer incredible ocean views and the chance to observe massive whales in the Sea of Cortez.',
        tip: 'Best during whale season',
    },
    kitesurfing: {
        name: 'Kitesurfing in La Ventana',
        location: 'La Ventana',
        description: 'Experience kitesurfing along the windy shores of La Ventana, one of the world’s most recognized destinations for wind sports. Seasonal conditions create ideal waters for both beginners and experienced riders.',
        tip: 'Best during windy season',
    },
    balandra_kayaking: {
        name: 'Kayaking in Balandra',
        location: 'Balandra Beach',
        description: 'Explore the calm turquoise waters of Balandra by kayak while enjoying beaches, rock formations, and coastal scenery. Kayaking tours offer a relaxing way to experience one of La Paz’s most iconic landscapes.',
        tip: 'Best during calm mornings',
    },
    scuba_diving: {
        name: 'Scuba Diving in the Sea of Cortez',
        location: 'Sea of Cortez',
        description: 'Explore the underwater world of the Sea of Cortez through scuba diving experiences near La Paz. Dive sites around the region feature reefs, marine life, rock formations, and clear blue waters.',
        tip: 'Best with calm sea conditions',
    },
    paddleboarding: {
        name: 'Paddleboarding in La Paz Bay',
        location: 'La Paz Bay',
        description: 'Enjoy paddleboarding in the calm waters of La Paz Bay while taking in coastal scenery and ocean views. It’s a relaxing outdoor activity ideal for exploring the shoreline at a slower pace.',
        tip: 'Perfect for a relaxing morning',
    },
    sport_fishing: {
        name: 'Sport Fishing in La Paz',
        location: 'La Paz Bay',
        description: 'Experience sport fishing in the waters around La Paz while exploring one of Baja California Sur’s most recognized outdoor activities. Local tours offer the chance to enjoy open ocean scenery and seasonal fishing conditions.',
        tip: 'Best during early morning trips',
    },
    los_islotes: {
        name: 'Los Islotes Boat Tour',
        location: 'Los Islotes / Espíritu Santo Area',
        description: 'Explore the rocky islets and marine landscapes around Los Islotes on a scenic boat tour near Espíritu Santo. The experience offers coastal views, wildlife sightings, and one of the most iconic island settings in La Paz.',
        tip: 'Best with calm sea conditions',
    },
    food_tour: {
        name: 'Malecón Food Tour',
        location: 'La Paz Malecón',
        description: 'Explore local flavors along the Malecón while visiting restaurants, seafood spots, and street food locations near the waterfront. Food tours offer a relaxed way to experience the culinary side of La Paz.',
        tip: 'Best during sunset and evenings',
    },
    stargazing: {
        name: 'Stargazing Experience',
        location: 'Desert Areas near La Paz',
        description: 'Experience the night skies around La Paz while exploring desert landscapes and remote coastal areas with low light pollution. Stargazing tours offer a peaceful outdoor experience with clear views of stars and constellations.',
        tip: 'Best during clear moonless nights',
    },
    calavera_hiking: {
        name: 'Cerro Calavera Hiking Tour',
        location: 'Cerro de la Calavera',
        description: 'Explore the scenic trails of Cerro de la Calavera while enjoying panoramic views over La Paz and the Sea of Cortez. Hiking experiences near sunset offer one of the best outdoor viewpoints in the city.',
        tip: 'Best during late afternoon hours',
    },
    mountain_biking: {
        name: 'Mountain Biking near La Paz',
        location: 'Desert Trails around La Paz',
        description: 'Ride through desert trails and coastal landscapes while exploring the natural terrain surrounding La Paz. Mountain biking experiences combine outdoor adventure with scenic views of Baja California Sur.',
        tip: 'Best during cooler morning hours',
    },
    todos_santos: {
        name: 'Todos Santos Day Trip',
        location: 'Todos Santos',
        description: 'Explore the colorful streets, local art galleries, cafés, and coastal scenery of Todos Santos during a relaxing day trip from La Paz. The town combines culture, food, and Pacific coast landscapes in one of Baja California Sur’s most recognized destinations.',
        tip: 'Best enjoyed with a full free day',
    },

    // -------------------------------------
    // MUSEUMS
    // -------------------------------------
    whale_museum: {
        name: 'Whale Museum',
        location: 'La Paz Downtown',
        description: 'An interactive space dedicated to marine life, with a special focus on whales. Explore exhibits on their biology, conservation, and role in the region through an engaging and educational experience.',
        tip: 'Great for a short educational visit',
        quickTip: 'Great for families and a quick indoor visit.',
    },
    art_museum: {
        name: 'Art Museum',
        location: 'La Paz Downtown',
        description: 'A cultural space showcasing contemporary and regional art from Baja California Sur. Its exhibitions highlight local identity, creativity, and artistic expression in a calm and inspiring setting.',
        tip: 'Quiet space, ideal for slow visits',
        quickTip: 'A calm indoor space to explore local art and exhibitions.',
    },
    regional_museum: {
        name: 'Regional Museum',
        location: 'La Paz Downtown',
        description: 'A historical museum that explores the origins and development of Baja California Sur. Its exhibits cover indigenous cultures, colonial history, and the region’s transformation over time.',
        tip: 'Great for learning about local history',
        quickTip: 'Explore the history of Baja California Sur in one place.',
    },
    vaquero_museum: {
        name: 'Museo del Vaquero',
        location: 'El Triunfo',
        description: 'A museum dedicated to the history and traditions of the Baja California Sur cowboy. Through artifacts and exhibits, it showcases rural life and the cultural roots of the region.',
        tip: 'Great for learning local traditions',
        quickTip: 'Discover local cowboy culture in an authentic setting.',
    },
    music_museum: {
        name: 'Museo de la Música',
        location: 'El Triunfo',
        description: 'A museum focused on the musical history of the region, closely tied to El Triunfo’s mining past. It features antique instruments and explores cultural evolution through music.',
        tip: 'Great for a unique cultural visit',
        quickTip: 'Explore local history through music and instruments.',
    },
    silver_route_museum: {
        name: 'Ruta de La Plata',
        location: 'El Triunfo',
        description: 'An open-air experience that explores the mining past of the region through preserved structures and historic spaces. It offers insight into how mining shaped El Triunfo.',
        tip: 'Best enjoyed at a slow pace',
        quickTip: 'Explore the region’s mining history in an open setting.',
    },
    cultural_center: {
        name: 'La Paz Cultural Center',
        location: 'La Paz Malecón',
        description: 'A cultural venue near the malecón that hosts exhibitions, local art, workshops, and community events. It offers a relaxed space to experience contemporary culture and artistic expression in La Paz.',
        tip: 'Great stop while exploring downtown',
        quickTip: 'Relaxed cultural space near the malecón.',
    },

    // -------------------------------------
    // VIEWPOINTS
    // -------------------------------------
    calavera: {
        name: 'Cerro de la Calavera',
        location: 'Palmira area / Pichilingue road',
        description: 'A scenic hilltop viewpoint with panoramic views over La Paz and the sea. The short hike leads to one of the best spots in the city to watch the sunset and take in the landscape from above.',
        tip: 'Best visited at sunset time',
        quickTip: 'Best at sunset, bring water and good shoes.',
    },
    atravesado: {
        name: 'Cerro Atravesado',
        location: 'Industrial area',
        description: 'A popular hilltop viewpoint with easy access and sweeping views over La Paz. The short hike makes it a favorite for locals looking to exercise, unwind, or catch the sunset above the city.',
        tip: 'Short hike, best at sunset',
        quickTip: 'Quick hike with great city views at sunset.',
    },
    malecon_viewpoint: {
        name: 'La Paz Malecón',
        location: 'La Paz Malecón',
        description: 'Enjoy panoramic sunset views along the La Paz malecón while overlooking the bay and the Sea of Cortez. The waterfront promenade is one of the city’s most iconic scenic spots during golden hour.',
        tip: 'Perfect during sunset hours',
        quickTip: 'One of the city’s most iconic sunset views.',
    },
    balandra_viewpoint: {
        name: 'Balandra Viewpoint',
        location: 'Scenic Road to Balandra',
        description: 'Drive along one of the most scenic coastal routes near La Paz while enjoying panoramic views of the Sea of Cortez and surrounding desert landscapes. The road toward Balandra offers several iconic viewpoints overlooking the bay.',
        tip: 'Best enjoyed during daylight hours',
        quickTip: 'Scenic coastal drive with panoramic ocean views.',
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
        outdoor: 'Outdoor',
        educational: 'Educational',
        hiking: 'Hiking',
        sunset: 'Sunset',
        art: 'Art',
        cultural: 'Cultural',
        historic: 'Historic',
        water: 'Water',
        coastal: 'Coastal',
        nightlife: 'Nightlife',
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

        ocean_adventure: 'Ocean Adventure',
        wildlife_experience: 'Wildlife Experience',
        cultural_experience: 'Cultural Experience',
    },

    // EXPERIENCE DURATION
    duration: {
        fullDay: 'Full day',
        halfDay: 'Half day',
    },

    // HIGHLIGHT
    highlight: {
        parking: {
            limited: 'Limited',
            available: 'Available',
        },
        entry: {
            free: 'Free Entry',
            paid: 'Paid Entry',
        },
        viewpoint: {
            urban: 'Urban Views',
            coastal: 'Coastal Views',
            elevated: 'Elevated Views',
            sunset: 'Sunset Views',
        },
        experience: {
            ocean: 'Ocean Escape',
            wildlife: 'Marine Wildlife',
            cultural: 'Local Culture',
            island: 'Island Adventure',
            coastal: 'Coastal Views',
            extreme: 'Extreme Sports',
            marine: 'Marine Exploration',
            local_flavors: 'Local Flavors',
            scenic_nights: 'Night Scenery',
            sunset_hiking: 'Sunset Hiking',
            desert_adventure: 'Desert Adventure',
            cultural_escape: 'Cultural Escape',
        }
    },
};

export default en;