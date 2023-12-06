const express = require('express');


const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Welcome in my server!');
});


app.get('/products', (req, res) => {
     res.send({
         products : [
            {
              "id": 1,
              "name": "Product 1",
              "price": 10
            },
            {
              "id": 2,
              "name": "Product 2",
              "price": 20
            },
            {
              "id": 3,
              "name": "Product 3",
              "price": 30
            }
        ]
 } )
  });
app.listen(port, () => {
  console.log(` Server starting in: http://localhost:${port}`);
});


