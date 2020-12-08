
function createExpressServer(){
    const port = 3000
    const express = require('express')
    const path = require('path');
    const app = express();
    const server = require('http').createServer(app)
    
    app.use(express.static(path.join(__dirname, "../../public")))
    app.set('views', path.join(__dirname, '../../public'))
    app.engine('html', require('ejs').renderFile)
    app.set('view engine', 'html')
    
    app.use('/', (req, res) => {
        res.render('index.html');
    
    })
    server.listen(port)
    console.log('servidor iniciado na porta: '+port)
    
}
module.exports = { 
    createExpressServer
}
