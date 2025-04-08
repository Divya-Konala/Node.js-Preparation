const http = require('http');
const axios = require('axios');

// Use axios to fetch data from an API

const server = http.createServer(async(req, res)=>{
    try{
        const data = await axios.get('https://fakestoreapi.com/products')
        .then((res)=> res.data);
        const productsHtml = data.map((item)=>(
            `<div style="border: 1px solid #ddd; margin: 10px; padding: 10px; display: inline-block; width:150px ; height:auto">
                <div>
                    <img src=${item.image} alt="productImage" style="width:100px ; height:auto" />
                </div>
                <div><h3>${item.title}</h3></div>
                <div>Price: $${item.price}</div>
                <div>Rating : ${item.rating.rate}></div>
            </div>`
        )).join("");
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                ${productsHtml}
            </body>
            </html>`);
    }catch(err){
        res.writeHead(500, {'content-type': 'text/html'});
        res.end('<h2>Sorry! We couldn&apos;t fetch the products</h2>');
    }
})

server.listen(8080);