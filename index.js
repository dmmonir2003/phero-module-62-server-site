const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.port || 5000;

app.use(cors());
const catagories = require('../data/categories.json');


app.get('/', (req, res) => {
    res.send('server is make');
})

app.get('/catagories', (req, res) => {
    res.send(catagories);
})

app.listen(port, () => {
    console.log(`examle app lessaning on port ${port}`);
})