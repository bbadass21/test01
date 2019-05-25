
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var bootstrap = require('bootstrap')
var session = require('express-session')

app.use(bodyParser.urlencoded({ extended : true }));

app.set('view engine', 'ejs')

//fichier JS et CSS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));   


app.get('/', (request, response) => {
    response.render('pages/index')
})

app.listen(2105, (req, res)=>{
    console.log("Serveur démarré....")
})