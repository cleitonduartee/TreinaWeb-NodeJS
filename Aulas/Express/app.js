const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.set('views', './views');//adiciona variavel ('variavel', 'valor');
app.set('view engine', 'jade'); //engine para renderizar as views

app.route('/')
    .get(function(req, resp){
        listarCursos(resp);
    })
    .post(function(req, resp){
        var curso = {nome: req.body.nome, categoria: req.body.categoria};
        
        inserirCurso(curso, function(){
            listarCursos(resp);
        })
    })

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
})

function listarCursos(resp){
    MongoCliente.connect('mongodb://localhost:27017/treinaweb', function(err, db){
        db.collection('cursos').find().sort({nome: 1}).toArray(function(err, result){
            resp.render('index', {data: result});
        })        
    })
}
function inserirCurso(obj, callback){
    MongoClient.connect('mongodb://localhost:27017/treinaweb', function(err, db){
        db.collection('cursos').insertOne(obj, function(err, result){
            callback();
        })
    })
}