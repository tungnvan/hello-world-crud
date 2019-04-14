const {createWorld, readWorld, updateWorld, deleteWorld} = require('../controllers/world-controller');

module.exports.ROUTES_CONFIG = [
    {
        path: '/hello',
        acts: {
            'GET': readWorld,
            'POST': createWorld,
            'PUT': updateWorld,
            'DELETE': deleteWorld,
        },
    }
];
