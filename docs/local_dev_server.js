const http = require('http');
const fs = require('fs');

/** This minimal static server should behave like the one from GitHub pages,
 *  for developing suppose */
const dev_server = http.createServer( (req, res) => {
    const requested_resource_path = resolve_requested_resource_path(req.url);

    fs.readFile(requested_resource_path, (err, data) => {
        if (err){
            if (err.code === 'ENOENT') {
                fs.readFile('./404.html', (err, data) => {
                    if(err) {
                        end_with_internal_error(res);
                        return;
                    }

                    // redirect mechanism from rafrex/spa-github-pages / 404.html "translates and redirects to App"
                    res.setHeader('Content-type', 'text/html; charset=utf-8;');
                    res.end(data);
                } );
                return;
            }

            end_with_internal_error(res);
            return;
        }

        res.setHeader('Content-type', `${get_ressource_type(requested_resource_path)}; charset=utf-8`);
        res.end(data);
        return;
    });
} );
dev_server.listen(8080);

const resolve_requested_resource_path = (url) => {
    if (url.startsWith('/?p=/')) { // redirect mechanism from rafrex/spa-github-pages -> index.html handles it
        return './index.html';
    }

    switch (url) {
        case '/':
        case '/index':
        case '/index.html':
            return './index.html';
        default:
            return '.' + url;
    }
}

const get_ressource_type = (ending) => {
    switch (ending) {
        case 'js':
            return 'text/javascript';
        case 'gif':
            return 'image/gif';
        default:
            return 'text/html';
    }
}

const end_with_internal_error = (res) => {
    res.statusCode = 500;
    res.end('internal server error');
}