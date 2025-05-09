module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'", 'https://multinovedadesjc-backend.onrender.com', 'https://multinovedadesjc.vercel.app'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://multinovedadesjc-backend.onrender.com', 'https://multinovedadesjc.vercel.app'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://multinovedadesjc-backend.onrender.com', 'https://multinovedadesjc.vercel.app'],
          'connect-src': ["'self'", 'https:', 'http:', 'wss:', 'https://multinovedadesjc-backend.onrender.com', 'https://multinovedadesjc.vercel.app'],
        },
      },
      origin: [
        'https://multinovedadesjc.vercel.app',
        'https://multinovedadesjc-backend.onrender.com',
        'http://localhost:3000', 
        '127.0.0.1',
        
        
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
      
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
