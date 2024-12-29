const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page')
        return;
    }
    if (req.url === '/about') {
        // BLOCKING CODE!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; i++) {
                console.log(`${i} ${j}`);
            }
        }
        return;
    }
    res.end(`
        <h1>404 Error</h1>
        <p>Page not found</p>
    `)
})

server.listen(5000, () => {
    console.log('Server is ready!');
})