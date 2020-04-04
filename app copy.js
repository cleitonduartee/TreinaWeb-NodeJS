// //Emissor de evento
// var EventEmitter = require('events');

// var emitter = new EventEmitter();

// emitter.on('meu_evento', function(teste){ //on: fica escultando o evento --->Parametro('nome do evento', 'função calback')
//     console.log('meu evento', teste);
// })

// emitter.emit('meu_evento', 'teste'); //emit: Execulta o event criado  -->Parametro('nome do evento', 'passagen de parametro para o evento')

// class Cao extends EventEmitter{
//     latir(){
//         console.log('Au au!')
//     }
// }

// var Rex = new Cao();

// Rex.on('pessoa_no_portao', Rex.latir);

// Rex.emit('pessoa_no_portao');




var fs = require('fs'); //fs : para leitura e criação de arquivo

// fs.writeFile('meu_arquivo.txt', 'Treina Web', function(err){ //writeFile: Cria o arquivo -->Parametros('nome do arquivo', 'Conteudo do Arquivo', funcção calback que recebe erro)
//     if(err){
//         console.log(err)
//     }
//     console.log("Arquivo Criado!")
// });

// fs.readFile('meu_arquivo.txt', function(err, data){ //readFile: faz a leitura do arquivo  -->Parametro ('nome do arquivo', função calback que recebe erro ou conteudo do arquivo)
//     if(err){
//         console.log("erro: "+err)
//     }
//     console.log(data);
// })
// console.time('Assincrono');
// var couter = 0;
// for(var i=0;i<=1000;i++){
//     fs.readFile('meu_arquivo.txt', function(err,data){
//         if(err){
//             return console.log(err);
//         }
//         couter++;
//         console.log("Assincrono: "+ data.toString());
//         if(couter ===1000){
//             console.timeEnd('Assincrono');
//         }
//     });
// }
//664,74ms

// console.time('Sincrona');
// for(var i=0; i<1000; i++){
//     var data = fs.readFileSync('meu_arquivo.txt');
//     console.log('Sincrona: ' + data);
// }
// console.timeEnd('Sincrona');

// //1.12S

//////Promise/////
function red(file){
    return new Promise(function(resolve, reject){
        fs.readFile(file, function(err,data){
            if(err){
                reject()
            }else{
                resolve(data.toString());
            }
        })
    })
}

red('meu_arquivo.txt')
    .then((data)=>{
        console.log(data); 
        return 'Retorno teste';
    })
    .then((data)=>{
        console.log(data)
    })