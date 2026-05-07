const es = {
    // UI
    ui: {
        // General elements
        quickTip: 'Consejo rápido',
        distance: 'A {{minutes}} min',

        // HomeScreen.tsx
        home: {
            title: "Explora\nLa Paz",
            subtitle: "Descubre playas,\ncultura y más",
            continue: "Continuar",
        },

        // CategoryScreen.tsx
        browseAll: {
            beaches: 'Explorar todas las playas',
            museums: 'Explorar todos los museos',
            viewpoints: 'Explorar todos los miradores',
            experiences: 'Explorar experiencias',
        },

        browseSubtitle: 'Explora todos los lugares libremente',

        category: {
            relax: 'Relajación',
            family: 'Familiar',
            social: 'Social',
            adventure: 'Aventura',
        },

        categoryDescription: {
            relax: 'Playas tranquilas para relajarte y desconectar',
            family: 'Playas seguras y accesibles',
            social: 'Playas animadas con ambiente y movimiento',
            adventure: 'Playas para explorar y vivir experiencias',
        },

        placeType: {
            title: "Elige qué\nexplorar",

            beaches: 'Playas',
            beachesSingular: 'playa',
            beachesPlural: 'playas',
            beachesDesc: "Aguas claras y arena suave",

            museums: 'Museos',
            museumsSingular: 'museo',
            museumsPlural: 'museos',
            museumsDesc: "Historia, cultura e identidad local",

            viewpoints: 'Miradores',
            viewpointsSingular: 'mirador',
            viewpointsPlural: 'miradores',
            viewpointsDesc: "Vistas panorámicas y atardeceres",

            experiences: 'Experiencias',
            experiencesSingular: 'experiencia',
            experiencesPlural: 'experiencias',
            experiencesDesc: 'Tours, naturaleza y aventuras',
        },

        placeLabel: {
            beach: 'Playa',
            museum: 'Museo',
            viewpoint: 'Mirador',
            experience: 'Experiencia',
        },

        // Hero.tsx
        hero: {
            title: {
                beaches: 'Encuentra tu\nplaya ideal',
                museums: 'Descubre cultura e historia',
                viewpoints: 'Disfruta vistas y naturaleza',
                experiences: 'Vive experiencias\ninolvidables',
            },

            location: 'La Paz, Baja California Sur',
        },

        // RecommendationsScreen.tsx
        recommendationsTitle: '{{category}} cerca de ti',
        recommendationsSubtitle: 'Basado en tu ubicación',

        // PlacesScreen.tsx
        searchPlaceholder: 'Buscar {{type}} (ej. {{example}})',
        noResultsTitle: 'No se encontraron {{type}}',
        noResultsSubtitle: 'Intenta con otra búsqueda o explora cercanos',
        resultsFor: 'resultados para',
        clearSearch: 'Limpiar búsqueda',

        // DetailScreen.tsx
        seeMore: 'Ver más',
        seeLess: 'Ver menos',
        openMaps: 'Abrir en Google Maps',
        getDirections: 'Obtener direcciones',
        viewMeetingPoint: 'Ver punto de encuentro',
    },

    // PLACES
    // BEACHES
    balandra: {
        name: 'Playa Balandra',
        location: 'Área Protegida de Balandra',
        description: 'Una playa impresionante conocida por sus aguas poco profundas y cristalinas, así como por sus formaciones de arena únicas. Al ser un área natural protegida, ofrece un entorno tranquilo ideal para caminar dentro del agua, relajarse y tomar fotos.',
        tip: 'Acceso limitado después de las 11 AM',
        quickTip: 'Visita en marea baja para caminar más dentro del agua.',
    },
    tecolote: {
        name: 'Playa El Tecolote',
        location: 'Zona de Balandra',
        description: 'Una playa animada con aguas tranquilas y vistas increíbles a la Isla Espíritu Santo. Destaca por sus restaurantes, actividades acuáticas y fácil acceso, ideal para pasar el día entre comida, ambiente y vistas al mar.',
        tip: 'Concurrida al mediodía y fines',
        quickTip: 'Punto ideal para salir a tours a la Isla Espíritu Santo.',
    },
    coromuel: {
        name: 'Playa El Coromuel',
        location: 'Carretera Escénica',
        description: 'Una playa urbana muy accesible, con aguas tranquilas y servicios públicos limpios. Muy popular entre locales, es ideal para nadar un rato, relajarse o disfrutar el atardecer cerca de La Paz.',
        tip: 'Suele estar concurrida por la tarde',
        quickTip: 'Perfecta si quieres playa sin salir de la ciudad.',
    },
    pichilingue: {
        name: 'Playa Pichilingue',
        location: 'Puerto Pichilingue',
        description: 'Con oleaje suave y agua clara, esta playa se encuentra cerca del puerto de ferris, pero mantiene un ambiente relajado. Con restaurantes cercanos y fácil acceso, es ideal para nadar y descansar.',
        tip: 'Algunas zonas están cerca del puerto',
        quickTip: 'Buen equilibrio entre acceso fácil y ambiente tranquilo.',
    },
    tesoro: {
        name: 'Playa El Tesoro',
        location: 'Zona de Pichilingue',
        description: 'Aguas claras y un ambiente relajado lo convierten en un refugio tranquilo. Ideal para nadar, desconectarse y disfrutar de un entorno más silencioso, lejos del bullicio.',
        tip: 'Mejor por la mañana, menos gente',
        quickTip: 'Perfecta para nadar en agua tranquila y cristalina.',
    },
    caimancito: {
        name: 'Playa El Caimancito',
        location: 'Carretera Escénica',
        description: 'Una playa pequeña y relajada, con aguas tranquilas y un ambiente local. Perfecta para una escapada rápida, disfrutar el atardecer o relajarse junto al mar sin alejarse de la ciudad.',
        tip: 'Se tienen mejores vistas al atardecer',
        quickTip: 'Buen lugar para un atardecer rápido junto al mar.',
    },
    saltito: {
        name: 'Playa El Saltito',
        location: 'Al norte de La Paz',
        description: 'Caracterizada por sus formaciones rocosas y aguas claras, esta playa ofrece un entorno más natural y poco intervenido. Ideal para hacer snorkel, relajarse y explorar la orilla.',
        tip: 'Lleva zapatos acuáticos por las rocas',
        quickTip: 'Buen lugar para hacer snorkel cerca de rocas.',
    },
    comitan: {
        name: 'Playa El Comitán',
        location: 'Al noroeste de La Paz',
        description: 'Con oleaje suave y un ambiente tranquilo y local, esta playa ofrece una experiencia sencilla y relajada junto al mar. Ideal para nadar, descansar y disfrutar sin multitudes.',
        tip: 'Suele estar tranquila y con poca gente',
        quickTip: 'Ideal para nadar con calma en aguas tranquilas.',
    },
    concha: {
        name: 'Playa La Concha',
        location: 'Carretera Escénica',
        description: 'Ubicada sobre la carretera escénica y cerca de zonas hoteleras, esta playa ofrece aguas claras y un ambiente relajado. Un lugar cómodo para nadar, descansar y disfrutar de una opción más tranquila cerca de la ciudad.',
        tip: 'El acceso varía según zonas del hotel',
        quickTip: 'Buena opción para una playa tranquila cerca de la ciudad.',
    },
    cruces: {
        name: 'Playa Las Cruces',
        location: 'Al noreste de La Paz',
        description: 'Sus vistas abiertas y la menor afluencia de gente le dan a esta playa un ambiente tranquilo y relajado. Perfecta para descansar, disfrutar el paisaje y alejarse de playas más concurridas.',
        tip: 'Menos concurrida entre semana',
        quickTip: 'Ideal para una escapada tranquila lejos de la gente.',
    },
    coyote: {
        name: 'Playa Punta Coyote',
        location: 'Al norte de La Paz',
        description: 'Un lugar costero más apartado, con vistas abiertas y un entorno natural sin intervenir. Ideal para explorar, relajarse y disfrutar de una playa más tranquila.',
        tip: 'Hay muy poca sombra durante el día',
        quickTip: 'Lleva agua y protección solar para una visita más cómoda.',
    },
    muertitos: {
        name: 'Playa Los Muertitos',
        location: 'Al noreste de La Paz',
        description: 'Una playa apartada, con vistas abiertas y un ambiente tranquilo y poco intervenido. Ideal para desconectarse, explorar y disfrutar de una experiencia más aislada junto al mar.',
        tip: 'Hay pocos servicios, lleva provisiones',
        quickTip: 'Perfecta para desconectarte por completo y disfrutar vistas abiertas.',
    },
    sargento: {
        name: 'Playa El Sargento',
        location: 'Al sureste de La Paz',
        description: 'Caracterizada por su costa abierta y viento constante, esta playa tiene un ambiente dinámico y activo. Conocida por el kitesurf, es ideal para explorar o disfrutar del mar de forma más activa.',
        tip: 'El viento es muy común aquí',
        quickTip: 'Ideal para kitesurf y caminatas largas en la playa.',
    },
    gaspareno: {
        name: 'Playa El Gaspareño',
        location: 'Al sur de La Paz',
        description: 'Un rincón costero poco conocido, con un ambiente tranquilo y local. Ideal para caminar junto a la orilla, relajarse y disfrutar de una zona más silenciosa.',
        tip: 'Hay pocos servicios en la zona',
        quickTip: 'Buena opción para caminar junto al mar con tranquilidad.',
    },
    las_playitas: {
        name: 'Las Playitas',
        location: 'Todos Santos',
        description: 'Con oleaje más fuerte y una costa abierta al Pacífico, esta playa ofrece una experiencia más intensa y natural. Ideal para surf, caminatas largas y disfrutar atardeceres lejos de aguas tranquilas.',
        tip: 'Oleaje fuerte, no ideal para nadar',
        quickTip: 'Perfecta para atardeceres y caminatas largas.',
    },

    // EXPERIENCES
    sea_lions: {
        name: 'Snorkeling con Lobos Marinos',
        location: 'Los Islotes / Zona Espíritu Santo',
        description: 'Una de las experiencias más icónicas de La Paz. Nada y haz snorkel cerca de lobos marinos en las aguas cristalinas de Los Islotes, rodeado de paisajes insulares y vida marina.',
        tip: 'Ideal por la mañana y mar tranquilo',
        quickTip: 'Si puedes, lleva cámara acuática.',
    },
    whale_shark: {
        name: 'Snorkeling con Tiburones Ballena',
        location: 'Bahía de La Paz',
        description: 'Una experiencia única en las aguas tranquilas de la Bahía de La Paz. Nada cerca de tiburones ballena y descubre uno de los pocos lugares del mundo donde estos enormes animales marinos pueden observarse de cerca.',    
        tip: 'Disponible solo en temporada',
    },
    espiritu_santo: {
        name: 'Tour en Isla Espíritu Santo',
        location: 'Zona de Isla Espíritu Santo',
        description: 'Explora las aguas turquesa y los paisajes volcánicos de Isla Espíritu Santo en un recorrido en lancha con playas, snorkel y vistas costeras impresionantes.',
        tip: 'Lleva bloqueador y agua extra',
    },
    whale_watching: {
        name: 'Avistamiento de Ballenas',
        location: 'Bahía de La Paz',
        description: 'Disfruta el avistamiento de ballenas cerca de La Paz mientras exploras la riqueza marina de la región. Los recorridos ofrecen vistas oceánicas y la oportunidad de observar enormes ballenas en el Mar de Cortés.',
        tip: 'Mejor en temporada de ballenas',
    },
    kitesurfing: {
        name: 'Kitesurfing en La Ventana',
        location: 'La Ventana',
        description: 'Disfruta el kitesurf en las ventosas costas de La Ventana, uno de los destinos más reconocidos del mundo para deportes de viento. Las condiciones de temporada crean aguas ideales para principiantes y expertos.',
        tip: 'Mejor en temporada de viento',
    },
    balandra_kayaking: {
        name: 'Kayak en Balandra',
        location: 'Playa Balandra',
        description: 'Recorre en kayak las tranquilas aguas turquesa de Balandra mientras disfrutas playas, formaciones rocosas y paisajes costeros. Los recorridos ofrecen una forma relajante de explorar uno de los lugares más icónicos de La Paz.',
        tip: 'Mejor por la mañana tranquila',
    },
    scuba_diving: {
        name: 'Buceo en el Mar de Cortés',
        location: 'Mar de Cortés',
        description: 'Explora el mundo submarino del Mar de Cortés mediante experiencias de buceo cerca de La Paz. Los sitios de inmersión incluyen arrecifes, vida marina, formaciones rocosas y aguas cristalinas.',
        tip: 'Mejor hacerlo en mar tranquilo',
    },
    paddleboarding: {
        name: 'Paddleboarding en la Bahía',
        location: 'Bahía de La Paz',
        description: 'Disfruta el paddleboarding en las aguas tranquilas de la Bahía de La Paz mientras recorres la costa y aprecias vistas marinas. Es una actividad relajante ideal para explorar el entorno con calma.',
        tip: 'Perfecto para una mañana relajada',
    },
    sport_fishing: {
        name: 'Pesca Deportiva en La Paz',
        location: 'Bahía de La Paz',
        description: 'Disfruta la pesca deportiva en las aguas de La Paz mientras exploras una de las actividades más representativas de Baja California Sur. Los recorridos ofrecen vistas oceánicas y condiciones ideales según la temporada.',
        tip: 'Mejor en recorridos matutinos',
    },

    // MUSEUMS
    whale_museum: {
        name: 'Museo de la Ballena',
        location: 'Centro de La Paz',
        description: 'Un espacio interactivo dedicado a la vida marina, con especial enfoque en las ballenas. Explora exhibiciones sobre su biología, conservación e importancia en la región de forma dinámica y educativa.',
        tip: 'Ideal para una visita educativa corta',
        quickTip: 'Ideal para familias y una visita rápida bajo techo.',
    },
    art_museum: {
        name: 'Museo de Arte',
        location: 'Centro de La Paz',
        description: 'Un espacio cultural dedicado al arte contemporáneo y regional de Baja California Sur. Sus exposiciones reflejan la identidad local, la creatividad y la expresión artística en un ambiente tranquilo.',
        tip: 'Espacio tranquilo, ideal para recorrer',
        quickTip: 'Perfecto para una pausa cultural bajo techo.',
    },
    regional_museum: {
        name: 'Museo Regional',
        location: 'Centro de La Paz',
        description: 'Un museo histórico que explora los orígenes y el desarrollo de Baja California Sur. Sus exhibiciones abarcan culturas indígenas, historia colonial y la evolución de la región.',
        tip: 'Ideal para conocer la historia local',
        quickTip: 'Descubre la historia de Baja California Sur en un solo lugar.',
    },
    vaquero_museum: {
        name: 'Museo del Vaquero',
        location: 'El Triunfo',
        description: 'Un espacio dedicado a la historia y tradición del vaquero sudcaliforniano. A través de objetos, fotografías y relatos, muestra la vida rural y las costumbres que han definido la identidad de la región.',
        tip: 'Ideal para conocer tradiciones locales',
        quickTip: 'Descubre la cultura vaquera en un ambiente auténtico.',
    },
    music_museum: {
        name: 'Museo de la Música',
        location: 'El Triunfo',
        description: 'Un espacio dedicado a la historia musical de la región, con énfasis en el pasado minero de El Triunfo. Exhibe instrumentos antiguos y cuenta la evolución cultural del lugar a través de la música.',
        tip: 'Ideal para una visita cultural diferente',
        quickTip: 'Descubre la historia local a través de la música.',
    },
    silver_route_museum: {
        name: 'Ruta de la Plata',
        location: 'El Triunfo',
        description: 'Un recorrido que explora el pasado minero de la región a través de estructuras, maquinaria y espacios históricos. Permite conocer cómo la minería dio forma al desarrollo de El Triunfo.',
        tip: 'Ideal para recorrer con calma',
        quickTip: 'Explora la historia minera en un entorno único.',
    },

    // VIEWPOINTS
    calavera: {
        name: 'Cerro de la Calavera',
        location: 'Zona Palmira / carretera a Pichilingue',
        description: 'Un mirador natural en lo alto de una colina, con vistas panorámicas de La Paz y el mar. La caminata corta te lleva a uno de los mejores puntos para disfrutar el atardecer y apreciar el paisaje desde arriba.',
        tip: 'Mejor visitarlo al atardecer temprano',
        quickTip: 'Mejor al atardecer, lleva agua y buen calzado.',
    },
    atravesado: {
        name: 'Cerro Atravesado',
        location: 'Zona Industrial',
        description: 'Un mirador popular de fácil acceso, con vistas amplias de La Paz. Su caminata corta lo hace ideal para hacer ejercicio, despejarse o disfrutar el atardecer sobre la ciudad.',
        tip: 'Caminata corta, mejor al atardecer',
        quickTip: 'Subida rápida con buenas vistas al atardecer.',
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
        windy: 'Ventoso',
        indoor: 'Interior',
        outdoor: 'Exterior',
        educational: 'Educativo',
        hiking: 'Senderismo',
        sunset: 'Atardecer',
        art: 'Arte',
        cultural: 'Cultural',
        historic: 'Histórico',
        water: 'Acuático',
        coastal: 'Costero',
      },

    duration: {
        fullDay: 'Todo el día',
        halfDay: 'Medio día',
    },

    // TYPE
    type: {
        quiet_scenic: 'Tranquilo y Escénico',
        lively_popular: 'Animado y Popular',
        urban_accessible: 'Urbano y Accesible',
        calm_family: 'Tranquilo y Familiar',

        indoor_educational: 'Interior y Educativo',
        cultural_historic: 'Cultural e Histórico',
        interactive_family: 'Interactivo y Familiar',
        
        scenic_hiking: 'Escénico y Senderismo',
        sunset_scenic: 'Atardecer y Escénico',
        elevated_views: 'Elevado y Escénico',

        ocean_adventure: 'Aventura Oceánica',
        wildlife_experience: 'Experiencia con Vida Silvestre',
        cultural_experience: 'Experiencia Cultural',
    },

    // HIGHLIGHT
    highlight: {
        // PARKING
        parking: {
            limited: 'Limitado',
            available: 'Disponible',
        },
        entry: {
            free: 'Entrada Gratuita',
            paid: 'Entrada con Costo',
        },
        difficulty: {
            easy: 'Caminata Fácil',
            moderate: 'Caminata Moderada',
            hard: 'Caminata Difícil',
        },
        experience: {
            ocean: 'Escape Océanico',
            wildlife: 'Fauna Marina',
            cultural: 'Cultura Local',
            island: 'Aventura Isleña',
            coastal: 'Vistas Costeras',
            extreme: 'Deportes Extremos',
            marine: 'Exploración Marina',
        }
    },
};

export default es;