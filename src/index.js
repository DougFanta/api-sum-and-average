import app from './server.js'
import http from 'http'
const port = process.env.PORT || '3000'
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=> {
    console.log(`server running on http://localhost:${port}`)
});