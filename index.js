const express = require('express');

const app = express();
app.get('/api/', (req, res) =>{
    res.json({hello: 'world'})
})

app.listen(process.env.PORT || 4000, ()=> console.log('App listening on 4000'));

const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB database connection established!");
});