const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 5000;

// creating Static path for public folder 

const staticPath = path.join(__dirname, '../public');

// middlewares

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send("Hello form server");
})

app.get('/about', (req, res) => {
    res.send("Hello form about page");
})

app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`)
})
