const express = require('express');
const app = express();
const sequelize = require('./config/connection');

const PORT = 5500;


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('--- Server up and running, baby ---');
    });
});