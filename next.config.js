const envSchema = require('./schema.js');
const { config } = require('dotenv');

config();

const { error, value: validatedEnv } = envSchema.parse(process.env);

if (error) {
  console.error('Erro ao validar variáveis de ambiente:', error);
  process.exit(1); 
}

const nextConfig = {
  env: validatedEnv,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig;
