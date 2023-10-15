const pass = require('./clave');
const config = {
    PORT: 3000, 
    DB_URL: `mongodb+srv://daniel:${pass.key}@cluster0.ydua0ua.mongodb.net/?retryWrites=true&w=majority`
}

module.exports = config