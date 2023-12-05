import express from 'express';
import products from './data/products.js';

const port = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
 } );

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find( (x) => x._id === req.params.id );
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product Not Found' });
    }
});

app.listen(port, () => {
     console.log(`Serve at http://localhost:${port}`);
 } );