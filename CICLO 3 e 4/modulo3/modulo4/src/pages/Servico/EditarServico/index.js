
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";
/* Necessita passar um ID como paramentro e criar um botao para voltar a lista de serviços */
/* Recebendo ID sendo passado como paramentro usando useState*/
export const EditarServico = (props) => {
    /* props de propriedades/ match relacionar / parametro / id */
    const [id] = useState(props.match.params.id);/* nome/descrição nos parametros "id" */
    const [nome, setNome] = useState("");/* estado inicial vazio */
    const [descricao, setDescricao] = useState("");


    /* Tratamento de erro Definição de status \/ */
    const [status, setStatus] = useState({
        formSave: false,
        type: "",
        message: ""
    });

    /* e de evento onclick (pode ser qlq nome)/ formulario nao seja carregado */
    /* FAZER A ALTERAÇÃO É UMA CONSULTA E UMA INCLUSÃO */
    /* passar o OBJETO PARA O HEADER PARA PEGAR O CONTEUDO DO FORMULARIO E VAI ENCAMINHAR PARA A APP EM FORMATO JSON */
    const edtServico = async e => {
        e.preventDefault();
        console.log("Editar");

        setStatus({
            formSave: true
        });

        const headers = {
            /* pega um texto e transformar em json */
            "Content-Type": "application/json"
        }

        /* aqui os parametros dentro de editarservico declarado acima{id...} e dps {headers} para o objeto em que esta pegando para transformar em json  */
        await axios.put(api + "/editarservico", { id, nome, descricao }, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: "error",
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: "success",
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: "error",
                    message: "Erro: Não foi possível se conectar a API"
                });
            });
    };

    /* await aguarda a finalização do procedimento  */
    /* Buscar serviço e (Consulta) */
    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    setNome(response.data.servico.nome);
                    setDescricao(response.data.servico.descricao);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getServico();/* retorno para o formulário */
    }, [id]);/* <-- coloca id para nao ficar em looping infinito */

    return (
        <div>
            <Container>
                <div className="d-flex ">
                    <div className="m-auto p-2">
                        <h1>Editar um serviço</h1>
                    </div>
                    <div>
                        <Link to={"/visualizarservico/"}
                            className="btn btn-outline-primary btn-sm m-1">Lista de Serviços</Link>
                        <Link to={"/servico/" + id} /* Api servico/:id*/
                            className="btn btn-outline-primary btn-sm m-1">Consultar Serviço</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === "error" ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === "success" ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        {/* onChange recebe objeto com evento click e atribui um valor para dentro dele para o nome*/}
                        <Input type="text" name="nome" placeholder="Nome do Serviço" value={nome} onChange={e => setNome(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do Serviço" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="warning" disabled>Salvando...
                            <Spinner size="sm" color="warning" children=""/>
                        </Button> :
                        <Button type="submit" outline color="warning m-1">Salvar</Button>}
                </Form>
            </Container>
        </div>
    );
}