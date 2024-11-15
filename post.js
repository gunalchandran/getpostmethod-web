var http = require('http');
var querystring = require('querystring');
var qs, name, email,pass;

function postexample(req, res) {
    var data1 = '';

    req.on('data', function (chunk) {
        data1 += chunk;
        console.log("Data in String format: " + data1);
    });
    req.on('end', function () {
        qs = querystring.parse(data1);
        console.log("query string : ");
        console.log(qs);
        name = qs['username'];
        email = qs['email']; 
        pass=qs['pass'];
        res.writeHead(200, { 'Content-Type': 'text/html' });
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
                <p>Your email id ${email} has been registered successfully using POST method</p>
            </body>
            </html>
        `);
        res.end();
    });
}

http.createServer(postexample).listen(8000);
console.log("Server started");
