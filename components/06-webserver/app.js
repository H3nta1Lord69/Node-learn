const http = require('http');

http.createServer( ( req, res ) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' } )

    res.write('Hello there');
    res.end();

})
.listen( 8080 );

console.log('Available on ', 8080)