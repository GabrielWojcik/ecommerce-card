const { object, string, number } = require('zod')

const envSchema = object({
    DATABASE_URL: string(),
});

module.exports = envSchema ; 
