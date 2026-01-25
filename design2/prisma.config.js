// prisma.config.js
require('dotenv').config(); // This loads your .env file

module.exports = {
  datasource: {
    url: process.env.DATABASE_URL,
  },
};