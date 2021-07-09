import express from 'express';
import data from './data.js';

const app = express()

app.get('/', (req, res) => {
    res.send('Server is on')
})

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.listen(3001, () => {
    console.log('server is on 3001')
})