const es = {
    // UI
    ui: {
        // General elements
        quickTip: 'Consejo rápido',

        // CategoryScreen.tsx
        browseAll: {
            beaches: 'Explorar todas las playas',
            museums: 'Explorar todos los museos',
            galleries: 'Explorar todas las galerías',
        },

        browseSubtitle: 'Explora todos los lugares libremente',

        category: {
            relax: 'Relajación',
            family: 'Familiar',
            social: 'Social',
            adventure: 'Aventura',
        },

        categoryDescription: {
            relax: 'Playas tranquilas',
            family: 'Seguras y accesibles',
            social: 'Playas populares y animadas',
            adventure: 'Actividades y exploración',
        },

        categorySubtitle: {
            relax: 'Aguas tranquilas y lugares perfectos para relajarte y desconectar',
            family: 'Playas seguras y accesibles, ideales para familias y grupos',
            social: 'Playas donde la gente se reúne, con comida, música o ambiente animado',
            adventure: 'Explora playas con actividades, tours y experiencias al aire libre',
        },

        placeType: {
            beaches: 'playas',
            museums: 'museos',
            galleries: 'galerías',
        },

        placeLabel: {
            beach: 'Playa',
            museum: 'Museo',
            gallery: 'Galería',
        },

        // Hero.tsx
        hero: {
            title: {
                beaches: 'Encuentra tu playa ideal',
                museums: 'Descubre cultura e historia',
                galleries: 'Explora arte y creatividad',
            },

            location: 'La Paz, Baja California Sur',
        },

        // RecommendationsScreen.tsx
        recommendationsTitle: '{{category}} cerca de ti',
        recommendationsSubtitle: 'Basado en tu ubicación',

        // PlacesScreen.tsx
        searchPlaceholder: 'Buscar lugares (ej. Balandra)',
        noResultsTitle: 'No se encontraron lugares',
        noResultsSubtitle: 'Intenta con otra búsqueda',
        clearSearch: 'Limpiar búsqueda',

        // DetailScreen.tsx
        openMaps: 'Abrir en Google Maps',
        getDirections: 'Obtener Direcciones',
    },

    // PLACES
    // BEACHES
    balandra: {
        name: 'Playa Balandra',
        location: 'Área Protegida de Balandra',
        description: 'Una playa poco profunda con aguas claras y cristalinas. Área protegida ideal para caminar, relajarse y tomar fotos.',
        tip: 'Acceso limitado después de las 11 AM',
        quickTip: 'Visita en marea baja para caminar dentro del agua.',
    },
    tecolote: {
        name: 'Playa El Tecolote',
        location: 'Zona de Balandra',
        description: 'Una playa animada con aguas tranquilas y vistas a la Isla Espíritu Santo. Ideal para comida, actividades y pasar el día.',
        tip: 'Concurrida al mediodía y fines',
        quickTip: 'Perfecta para actividades acuáticas y tours.',
    },
    coromuel: {
        name: 'Playa El Coromuel',
        location: 'Carretera Escénica',
        description: 'Una playa urbana con fácil acceso, aguas tranquilas y servicios limpios. Ideal para visitas rápidas muy cerca de La Paz.',
        tip: 'Suele estar concurrida por la tarde',
        quickTip: 'Ideal para una escapada rápida a la playa.',
    },
    pichilingue: {
        name: 'Playa Pichilingue',
        location: 'Puerto Pichilingue',
        description: 'Una playa tranquila con oleaje suave, agua clara y restaurantes cercanos. Perfecta para relajarse en un ambiente agradable.',
        tip: 'Algunas zonas están cerca del puerto',
        quickTip: 'Ideal para nadar y relajarse fácilmente.',
    },
    tesoro: {
        name: 'Playa El Tesoro',
        location: 'Zona de Pichilingue',
        description: 'Una playa tranquila con aguas claras y ambiente relajado. Ideal para descansar, nadar y disfrutar un lugar más calmado.',
        tip: 'Mejor por la mañana, menos gente',
        quickTip: 'Ideal para nadar en agua tranquila y clara.',
    },
    caimancito: {
        name: 'Playa El Caimancito',
        location: 'Bahía de La Paz',
        description: 'Una playa pequeña y relajada con aguas tranquilas y ambiente local. Ideal para visitas rápidas y disfrutar el atardecer.',
        tip: 'Se tienen mejores vistas al atardecer',
        quickTip: 'Buen lugar para un atardecer rápido junto al mar.',
    },
    saltito: {
        name: 'Playa El Saltito',
        location: 'Al norte de La Paz',
        description: 'Una playa escénica con formaciones rocosas y agua clara. Ideal para snorkel, relajarse y disfrutar un entorno natural.',
        tip: 'Lleva zapatos acuáticos por las rocas',
        quickTip: 'Buen lugar para hacer snorkel cerca de rocas.',
    },

    // TAGS
    tag: {
        scenic: 'Escénico',
        quiet: 'Tranquilo',
        shallow_water: 'Agua poco profunda',
        food: 'Comida',
        activities: 'Actividades',
        boat_tours: 'Paseos en lancha',
        urban: 'Urbano',
        accessible: 'Accesible',
        quick_visit: 'Visita rápida',
        family: 'Familiar',
        calm: 'Calmado',
      },

    // TYPE
    type: {
        quiet_scenic: 'Tranquilo y Escénico',
        lively_popular: 'Animado y Popular',
        urban_accessible: 'Urbano y Accesible',
        calm_family: 'Tranquilo y Familiar',
      },

    // PARKING
    parking: {
        limited: 'Limitado',
        available: 'Disponible',
      },

    // DISTANCE
    distance: {
        minutes: 'A {{value}} min',
        unavailable: 'Distancia no disponible',
      },
};

export default es;