const http = require('http'); const os = require('os'); const path = require('path'); const EventEmitter = require('events'); const emitter = new EventEmitter();

// Log every request emitter.on('requestReceived', (url) => { console.log(Request received for: ${url}); });

const server = http.createServer((req, res) => {

// Ignore favicon requests
if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
}

// Emit event for logging
emitter.emit('requestReceived', req.url);

// Home page
if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Home Page\nGo to /system or /path');
}

// System info route
else if (req.url === '/system') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = {
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        freeMemory: os.freemem(),
        totalMemory: os.totalmem()
    };
    res.end(JSON.stringify(data, null, 2));
}

// Path info route
else if (req.url === '/path') {
    const filePath = path.join(__dirname, 'demo.txt');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Example file path: ${filePath}`);
}

// 404 for anything else
else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page Not Found');
}
});

server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });

// COMMANDS: node server.js O/P: (local host)link/path link/system