const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());
const catagories = require('../data/categories.json');
const news = require('./data/news.json');
app.get('/', (req, res) => {
    res.send('server is make');
})

app.get('/catagories', (req, res) => {
    res.send(catagories);
})

// all news loaded
app.get('/news', (req, res) => {
    res.send(news);

})
// spacific by id (1) news

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);

})

// spacific all catagory base news by filter categories_id;
app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const cetagoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(cetagoryNews);
    }
})



app.listen(port, () => {
    console.log(`examle app lessaning on port ${port}`);
})