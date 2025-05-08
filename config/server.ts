module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'http://127.0.0.1:1337'), // opcional
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Agrega esta configuración
  allowedHosts: [
    'localhost',
    '127.0.0.1',
    'ea8a-190-12-13-23.ngrok-free.app',
    'https://ea8a-190-12-13-23.ngrok-free.app'
  ],
});
