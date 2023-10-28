const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async() => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/microservices_backend', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 