const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
})

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT:  process.env.PORT || 8080
}