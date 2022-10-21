const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const controllers = require('./controllers');

const Model = require('./models');

const PORT = process.env.PORT || 5500;

app.use('/api', controllers); // everything from the imported controllers folder will have the '/api' prefix.

// app.get('/', (req, res) => {
//     res.json('hi');
// });

// app.get('/dataOne', (req, res) => {
//     res.json( {data: 'some data'} )
// });

// app.get('/dataTwo', (req, res) => {
//     res.json( {data: 'some more data'} )
// });

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('--- Server up and running, baby ---');
    });
});