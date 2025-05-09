import { config } from "process";

module.exports = ({ env }) => ({ 
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
            provider: '@strapi/cloudinary',
                providerOptions: {
                    cloud_name: env('CLOUDINARY_NAME'),
                    api_key: env('CLOUDINARY_API_KEY'),
                    api_secret: env('CLOUDINARY_API_SECRET'),
                },
            },
    },
 });