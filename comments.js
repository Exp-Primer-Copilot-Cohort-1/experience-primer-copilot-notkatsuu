// Create web server
// 1. Create a web server
// 2. Listen for requests
// 3. Parse the request
// 4. Read from the file
// 5. Write to the file
// 6. Respond to the client
// 7. Handle errors

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// 2. Listen for requests
const server = http.createServer((req, res) => {
    // 3. Parse the request
    const pathName = req.url;
    const query = qs.parse(pathName.split('?')[1]);
    const method = req.method;

    // 4. Read from the file
    if (pathName === '/comments' && method === 'GET') {
        const comments = fs.readFileSync('./data/comments.json', 'utf-8');
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(comments);
    } else if (pathName === '/comments' && method === 'POST') {
        // 5. Write to the file
        const comment = {
            id: Date.now(),
            ...query
        };
        const comments = JSON.parse(fs.readFileSync('./data/comments.json', 'utf-8'));
        comments.push(comment);
        fs.writeFileSync('./data/comments.json', JSON.stringify(comments));

        // 6. Respond to the client
        res.writeHead(201, {
            'Content-type': 'application/json'
        });
        res.end(JSON.stringify(comment));
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>404 Page not found!</h1>');
    }
});

server.listen(3000, '
