const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo !');
});

//Exercicio da Aula 27/08
/*app.get('/clientes', function(req,res){
    res.send('Lista de clientes !');
});

app.get('/servicos', function(req,res){
    res.send('Lista de seriços !');
});

app.get('/pedidos', function(req,res){
    res.send('Lista de pedidos !');
});*/



/*app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome: "Vinicius Figueiredo Toledo ",
        endereco: "Rua Patricia,1013",
        cidade: "Maringá",
        uf:"PR",
        nascimento:"1993-08-11",
    });
    res.send('Novo Cliente foi inserido');
});
app.get('/pedidos', async(req,res)=>{
    let create = await pedido.create({
        idCliente: 1,
        idServico: 1,
        valor: 5.55,
        data: '2021-09-01',
    });
    res.send('Pedido foi inserido');
 });*/
app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
       req.body
    );
    res.send('Serviço foi inserido!');
});


let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});