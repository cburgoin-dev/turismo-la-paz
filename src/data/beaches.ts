export const beaches = [
    {
        id: '1',
        name: 'Balandra',
        displayName: 'Playa Balandra',
        aliases: ['Playa Balandra', 'Balandra Beach'],
        location: 'Balandra Protected Area',

        categories: ['relax', 'family'],
        tags: ['Scenic', 'Quiet', 'Shallow Water'],

        priceLevel: 2,

        description: 'Experience the beauty of this shallow bay, known for its calm, clear waters. A protected area perfect for walking, relaxing, and photos.',
    
        images: [
            require('../../assets/images/beaches/balandra/1.jpg'),
            require('../../assets/images/beaches/balandra/2.jpg'),
            require('../../assets/images/beaches/balandra/3.jpg'),
            require('../../assets/images/beaches/balandra/4.jpg'),
            require('../../assets/images/beaches/balandra/5.jpg'),
        ],

        distance: '25 min away',
        type: 'Quiet & Scenic',
        parking: 'Limited',

        tip: 'Best before 11 AM, limited access later',
        quickTip: 'Visit at low tide to walk far into the shallow water.',
        quickTipColor: 'rgba(28, 100, 120, 0.88)',

        coordinates: {
            latitude: 24.321750812967068,
            longitude: -110.32386656236874,
        }
    },
    {
        id: '2',
        name: 'El Tecolote',
        displayName: 'Playa El Tecolote',
        aliases: ['Playa Tecolote', 'Tecolote Beach'],
        location: 'Balandra Area',

        categories: ['social', 'adventure'],
        tags: ['Food', 'Activities', 'Boat Tours'],

        priceLevel: 2,

        description: 'A lively beach with calm waters and views of Espíritu Santo Island. Perfect for food, activities, and spending the day outdoors.',

        images: [
            require('../../assets/images/beaches/tecolote/1.jpg'),
            require('../../assets/images/beaches/tecolote/2.jpg'),
            require('../../assets/images/beaches/tecolote/3.jpg'),
            require('../../assets/images/beaches/tecolote/4.jpg'),
            require('../../assets/images/beaches/tecolote/5.jpg'),
        ],

        distance: '35 min away',
        type: 'Lively & Popular',
        parking: 'Available',
    
        tip: 'Busy at midday, especially weekends',
        quickTip: 'Great for water activities and island tours.',
        quickTipColor: 'rgba(88, 170, 165, 0.88)',

        coordinates: {
            latitude: 24.336326705782476,
            longitude: -110.31649229942073,
        }
    },
    {
        id: '3',
        name: 'El Coromuel',
        displayName: 'Playa El Coromuel',
        aliases: ['Playa Coromuel', 'Coromuel Beach'],
        location: 'Scenic Road',

        categories: ['family', 'social'],
        tags: ['Urban', 'Accessible', 'Quick Visit'],

        priceLevel: 1,

        description: 'A city beach with easy access, calm waters, and clean facilities. Ideal for quick visits and relaxing close to La Paz.',

        images: [
            require('../../assets/images/beaches/coromuel/1.jpg'),
            require('../../assets/images/beaches/coromuel/2.jpg'),
            require('../../assets/images/beaches/coromuel/3.jpg'),
            require('../../assets/images/beaches/coromuel/4.jpg'),
            require('../../assets/images/beaches/coromuel/5.jpg'),
        ],

        distance: '15 min away',
        type: 'Urban & Accessible',
        parking: 'Limited',

        tip: 'Crowded in the afternoon',
        quickTip: 'Perfect for a quick beach break near the city.',
        quickTipColor: 'rgba(194, 163, 123, 0.92)',
        coordinates: {
            latitude: 24.196546189554766,
            longitude: -110.30012198647074,
        }
    },
    {
        id: '4',
        name: 'Pichilingue',
        displayName: 'Playa Pichilingue',
        aliases: ['Playa Pichilingue', 'Pichilingue Beach'],
        location: 'Pichilingue Port',

        categories: ['family', 'relax'],
        tags: ['Family', 'Calm', 'Food'],

        priceLevel: 1,

        description: 'A calm beach with gentle waves, clear water, and nearby restaurants. A great spot for relaxing and enjoying a quieter atmosphere.',

        images: [
            require('../../assets/images/beaches/pichilingue/1.jpg'),
            require('../../assets/images/beaches/pichilingue/2.jpg'),
            require('../../assets/images/beaches/pichilingue/3.jpg'),
            require('../../assets/images/beaches/pichilingue/4.jpg'),
            require('../../assets/images/beaches/pichilingue/5.jpg'),
        ],

        distance: '30 min away',
        type: 'Calm & Family',
        parking: 'Available',

        tip: 'Some areas are near the ferry port',
        quickTip: 'Good for swimming and relaxing with easy access.',
        quickTipColor: 'rgba(194, 163, 123, 0.92)',
        
        coordinates: {
            latitude: 24.28412389165191,
            longitude: -110.32794883307128,
        }
    },
];