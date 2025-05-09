import { config } from "process";

module.exports = ({ env }) => ({ 
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
 });