import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api } from "../../../config";

export const CadastrarServico = () => {
    /* quem irá receber os dados DTO */
    /*        Get   e   Cat        \/ uma função        */
    const [servico, setServico] = useState({
        nome: "",/* recebe a principio os campos vazios! */
        descricao: ""
    });

    /* Objeto Status - TRATAMENTO DE ERROS */
    const [status, setStatus] = useState({
        formSave: false,/* declara   */
        type: "", /* se foi de error or success, começa vazio*/
        message: ""
    });


    /* passa o o objeto dentro da função */
    const valorInput = e => setServico({
        /* pegar o nome do atributo "e" e do formulario e atribui a nome e descricao */
        /* ... pega all servico, [função pega todos as descrições acima de "e"] :<-- (atribuição, ex nome:) e. pega os itens no cadastro preenchido */
        ...servico, [e.target.name]: e.target.value
    });


    /* Incluir evento através de preventDefault()=IMPEDE QUE A PAGINA ATUALIZA*/
    const cadServico = async e => {
        e.preventDefault();

        /* Define a propriedade formSave*/
        setStatus({
            formSave: true,/* a partir daqui esta valendo true */
        });

        /* recebe em formato JSON em headers no caso as informações do formulário */
        const headers = {
            "Content-Type": "application/json"
        }

        /*  usado o do Controller.js de Criação de serviço, importar axios e api !*/
        /* Inserção, portanto necessita passar objeto(servico) e algumas informações e Headers { recebe conjunto de dados} necessário quando há argumentos no Postman! */
        await axios.post(api + "/servicos", servico, { headers })
            .then((response) => {
                if (response.data.error) {
                    /* se chegar aqui entao setStatus e associa um valor ou tipo e */
                    setStatus({
                        /* ação de salvar ja aconteceu, então fazer*/
                        formSave: false,/* tirar de todos */
                        type: "error",/* erro de cadastro */
                        message: response.data.message/* data sao os dados */
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: "success",
                        message: response.data.message
                    });
                }
            }).catch(() => {
                setStatus({/* erro de conexão */
                    formSave: false,
                    type: "error",
                    message: "Erro: Não foi possível se conectar a API"
                });
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Cadastrar Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico"/* aqui continua pq vai ter um botao que quando clicado em Visualizar ele volta */
                            className="btn btn-outline-primary btn-sm">
                            Lista de Serviços
                        </Link>
                    </div>
                </div>
                <hr className="m-1" />{/* linha de quebra */}

                {/* usar o Status error ou success */}
                {status.type === "error" ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === "success" ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={cadServico}>
                    {/* nome e imput nome */}
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        {/* name associado ao "objeto" */}
                        <Input type="text" name="nome" placeholder="Nome do Serviço" onChange={valorInput} />
                        {/* onChange , quando houver mudança subtituir em valorInput */}
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do Serviço" onChange={valorInput} />
                    </FormGroup>


                    {/* outline so recebe foco quando tiver o mouse em cima */}
                    {status.formSave ? /* <-- se for true \/ */
                        <Button type="submit" outline color="info" disabled>Salvando...
                        <Spinner size="sm" color="primary" children="" />{/* cildren necessario para não bugar! */}
                        </Button> : /* <- caso contrario\/*/
                        <Button type="submit" outline color="info">Cadastrar</Button>}
                        {/* criar um botao de reset */}
                        <Button type="reset" outline color="success m-1">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}