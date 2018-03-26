const http = require('http');
const fs = require('fs');

/** This minimal static server should behave like the one from GitHub pages,
 *  for developing suppose */
const dev_server = http.createServer(function (req, res) {
    let requested_resource = req.url;

    switch (req.url) {
        case '/':
        case '/index':
        case '/index.html':
            requested_resource = { path: './index.html', type: 'text/html' };
            break;
        case '/dist/bundle.js':
            requested_resource = { path: './dist/bundle.js', type: 'text/javascript' };
            break;
        default:
            if (req.url.startsWith('/?p=/')) { // redirect mechanism from rafrex/spa-github-pages -> index.html handles it
                requested_resource = { path: './index.html', type: 'text/html' };
                break;
            }
            requested_resource = { path: './404.html', type: 'text/html' }; // redirect mechanism from rafrex/spa-github-pages -> 404.html "translates and redirects"
    }

    fs.readFile(requested_resource.path, function(err, data){
        if(err){
            res.statusCode = 500;
            res.end('internal server error');
        } else {
            res.setHeader('Content-type', requested_resource.type);
            res.end(data);
        }
    });
});
dev_server.listen(8080);