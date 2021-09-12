const express = require('express');
const cors = require('cors');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;

app.get('/', function (req, res) {
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



app.get('/clientes', async(req,res)=>{
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
 });
app.post('/clientes', async (req, res) => {
    let crate = await cliente.create(
        req.body
    );
    res.send('Novo Cliente foi inserido');
});


app.post('/servicos', async(req,res)=>{



    let create = await servico.create(
        req.body
    );

    res.send('SERVIÇO ADICIONADO!');

    await aguardar(3000);
    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve, ms);
        })
    }

});


app.post('/pedidos', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido!');
});


app.get('/listaservicos', async (req, res) => {
    await servico.findAll({
        order: [['nome', 'ASC']]
    }).then(function (servicos) {
        res.json({ servicos })
    });
});

app.get('/ofertas', async (req, res) => {
    await servico.count('id')
        .then(function (servicos) {
            res.json(servicos)
        });
});

app.get('/servico/:id', async (req, res) => {
    servico.findByPk(req.params.id)
        .then(servico => {
            return res.json({
                error: false,
                servico
            });
        }).catch(function (error) {
            return res.status(400).json({
                erro: true,
                message: "Código não está cadastrado!"
            });
        });
});

// get = importar da base de da dados / linha de aplicação
// post = inserção via formulário
//put = 

//1 visualize todos os clientes
app.get('/listacliente', async (req, res) => {
    await cliente.findAll({
        order: [['nome', 'ASC']]
    }).then(function (clientes) {
        res.json({ clientes })
    });

});

//2 visualize os clientes em ordem de antiguidade
app.get('/ordenarclientes', async (req, res) => {
    await cliente.findAll({
        order: [['id', 'DESC']]
    }).then(function (clientes) {
        res.json({ clientes })
    });

});

//3 visualize todos os pedidos
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });

});

//4 visualize o pedido por ordem a partir do maior valor
app.get('/maiorvalor', async (req, res) => {
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function (pedidos) {
        res.json({ pedidos })
    });

});

//5 informe quantos clientes estão na nossa base de dados
app.get('/qtdclientes', async (req, res) => {
    await cliente.count('id')
        .then(function (clientes) {
            res.json(clientes);
        });

});

//6 informe a quantidade de pedidos solicitados
app.get('/qtdpedidos', async (req, res) => {
    await pedido.count('id')
        .then(function (pedidos) {
            res.json(pedidos);
        });

});

app.get('/atualizaservico', async (req, res) => {
    await servico.findByPk(1)
        .then(servico => {
            servico.nome = 'HTML/CSS/JS';
            servico.descricao = 'Páginas estáticas e dinâmicas estilizadas';
            servico.save();
            return res.json({ servico });

        });
});

app.put('/editarservico', (req, res) => {
    servico.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/servicospedidos', async (req, res) => {
    await servico.findByPk(2, {
        include: [{ all: true }]
    }).then(servico => {
        return res.json({ servico });
    });
});

app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});

// 1 faça busca por serviços de cliente passando o id do cliente
app.get('/listaservicocliente/:id', async (req, res) => {
    await pedido.findAll({ where: { ClienteId: [req.params.id] } })
        .then(function (pedidos) {
            res.json(pedidos)
        });
    console.log(pedidos, valor, ClienteId)
});

// 2 Utilize a rota para consultar clientes e faça a edição de um
//consultar: /listacliente
app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do CLiente."
        });
    });
});

// 3 Utilize a rota para consultar pedidos e faça a edição de um
//consultar: /listapedidos
app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});

//EXERCÍCIO 01 (AULA 05)
// nao assisti a aula ao vivo, entao fiz um exercicio de um grupo.
app.get('/servicoscliente/:id', async (req, res) => {
    await servico.findAll({ where: { ClienteId: [req.params.id] } })
        .then(function (servicos) {
            res.json(servicos)
        });
    console.log(servicos)
});

app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/excluircliente', async (req, res) => {
    await cliente.destroy({
        where: { id: 1 }
    }).then(function () {
        return res.json("Deletado.");
    });
});

app.delete('/apagarcliente/:nome', (req, res) => {
    cliente.destroy({
        where: { nome: req.params.nome }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});

//---------DESAFIO 1 -------------

//---------DESAFIO 2 -------------

app.post('/cliente', async (req, res) => {
    let create = await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido');
});

//---------DESAFIO 3 -------------

app.get('/pedidodc/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: {
            ClienteId: {
                [Op.eq]: req.params.id
            }
        }
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

//---------DESAFIO 4 -------------

//rota de lista todos os pedidos de um cliente
app.get('/pedidoporcliente/:id', async (req, res) => {
    await pedido.findAll({
        include: [{ all: true }]
    },
        {
            where: {
                ClienteId: req.params.id
            }
        }).then((pedido) => {
            return res.json({ pedido })
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Erro ao atualizar"
            });
        });
});
//ROTA QUE PERMITE ALTERAR OS PEDIDOS UTILIZANDO PEDIDOSID
app.put('/editarpedidoporcliente', (req, res) => {
    pedido.update(req.body, {
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        });
    });
});


let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo');
});


