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
            social: 'Playas populares con comida, música y un ambiente animado',
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
    balandra: {
        name: 'Playa Balandra',
        location: 'Área protegida de Balandra',
        description: 'Disfruta la belleza de esta bahía poco profunda, conocida por sus aguas tranquilas y cristalinas. Un área protegida perfecta para caminar, relajarse y tomar fotos.',
        tip: 'Mejor antes de las 11 AM, acceso limitado después',
        quickTip: 'Visita en marea baja para caminar dentro del agua.',
      },
      tecolote: {
        name: 'Playa El Tecolote',
        location: 'Zona de Balandra',
        description: 'Una playa animada con aguas tranquilas y vista a la Isla Espíritu Santo. Ideal para comida, actividades y pasar el día.',
        tip: 'Muy concurrida al mediodía, especialmente fines de semana',
        quickTip: 'Perfecta para actividades acuáticas y tours.',
      },
      coromuel: {
        name: 'Playa El Coromuel',
        location: 'Carretera escénica',
        description: 'Una playa urbana con fácil acceso, aguas tranquilas y servicios limpios. Ideal para visitas rápidas cerca de La Paz.',
        tip: 'Concurrida por la tarde',
        quickTip: 'Ideal para una escapada rápida a la playa.',
      },
      pichilingue: {
        name: 'Playa Pichilingue',
        location: 'Puerto Pichilingue',
        description: 'Una playa tranquila con oleaje suave, agua clara y restaurantes cercanos. Perfecta para relajarse.',
        tip: 'Algunas zonas están cerca del puerto',
        quickTip: 'Ideal para nadar y relajarse fácilmente.',
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
        calm: 'Tranquilo',
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