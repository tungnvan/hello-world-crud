const http = require('http');
const url = require('url');
const {ROUTES_CONFIG} = require('./routes/routes-config');
const {invalidMethod} = require('./controllers/invalid-controller');

const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    const location = url.parse(req.url);
    const foundConfig = ROUTES_CONFIG.find(route => route.path === location.pathname);
    const message = foundConfig
        ? (foundConfig.acts[req.method] || invalidMethod)()
        : 'URL not found!';
    console.log(message);
    res.write(message);
    res.end();
});

server.listen(port, host, () => {console.log(`Server is listening on ${host}:${port}`)});