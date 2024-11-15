const http = require('http');
const url = require('url');
const querystring = require('querystring');

function getexample(request, response) {
    const parsedUrl = url.parse(request.url, true);
    
    const path = parsedUrl.pathname;

    if (path === '/login') {
        console.log('URL ' + request.url + ' received. using get method');
        const qs = parsedUrl.query;
        console.log("query string :");
        console.log(qs);

        const name1 = qs["username"];
        const email = qs["email"];
        const pass= qs["pass"];
        response.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Registration Success</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        text-align: center;
                        padding: 50px;
                        background-image=url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg');
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <h1>Hello ${name},</h1>
                <p>Your email id ${email} has been registered successfully using GET method</p>
            </body>
            </html>
        `);
        response.end();
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Page not found');
        response.end();
    }
}


http.createServer(getexample).listen(7000);
console.log('Server has Started…….');