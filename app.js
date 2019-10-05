
const http = require('http');
const hbs = require("hbs");
const fs = require('fs');

// app.engine( 'hbs', hbs( {
//     extname: 'hbs',
//     defaultLayout: 'main',
//     layoutsDir: __dirname + '/views/layouts/',
//     partialsDir: __dirname + '/views/partials/'
// } ) );
//
// app.set( 'view engine', 'hbs' );

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if (req.url === '/') {
        app.get('/', function (req, res) {
            res.render('index');
        });
    } else if (req.url === '/login') {
        app.get('/', function (req, res) {
            res.render('/login');
        });
    } else {
        app.get('/', function (req, res) {
            res.render('register');
        });

        // fs.readFile('views/register', 'utf-8', (err, data) => {
        //     res.end(data);
        // });
    }
}).listen(4000);

