module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000', 
        '127.0.0.1',
        'https://multinovedadesjc.vercel.app/'
        
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      
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
