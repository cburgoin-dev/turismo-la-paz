export const viewpoints = [
    {
        id: '1',
        name: 'Cerro de la Calavera',
        displayNameKey: 'calavera.name',
        aliases: ['Cerro de la Calavera'],

        locationKey: 'calavera.location',

        categories: ['adventure', 'relax'],
        tags: ['scenic', 'hiking'],

        priceLevel: 0,

        descriptionKey: 'calavera.description',

        images: [
            {
                source: require('../../assets/images/viewpoints/calavera/1.jpg')
            },
        ],

        fallbackMinutes: 15,

        type: 'outdoor',
        parking: 'limited',

        tipKey: 'calavera.tip',
        quickTipKey: 'calavera.quickTip',

        quickTipColor: 'rgba(194,163,123,0.9)',

        coordinates: {
            latitude: 24.159,
            longitude: -110.305,
        }
    }
]