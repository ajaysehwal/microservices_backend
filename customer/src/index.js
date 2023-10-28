const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(8000, () => {
        console.log(`listening to port 8000`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();