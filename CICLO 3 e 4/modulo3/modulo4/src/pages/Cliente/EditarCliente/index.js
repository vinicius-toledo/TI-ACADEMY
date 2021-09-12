import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const EditarCliente = (props) => {
    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [nascimento, setNascimento] = useState("");

    const [status, setStatus] = useState({
        formSave: false,
        type: "",
        message: ""
    });

    const edtCliente = async e => {
        e.preventDefault();
        console.log("Editar");

        setStatus({
            formSave: true
        });

        const headers = {
            "Content-Type": "application/json"
        }

        await axios.put(api + "/editarcliente", {
            id,
            nome,
            endereco,
            cidade,
            uf,
            nascimento
        }, { headers })
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

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setCidade(response.data.cliente.cidade);
                    setUf(response.data.cliente.uf);
                    setNascimento(response.data.cliente.nascimento);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex ">
                    <div className="m-auto p-2">
                        <h1>Editar um cliente</h1>
                    </div>
                    <div>
                        <Link to={"/visualizarcliente/"}
                            className="btn btn-outline-primary btn-sm m-1">Lista de Clientes</Link>
                        <Link to={"/cliente/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar Cliente</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === "error" ? <Alert color="danger">
                    {status.message}</Alert> : ""}

                {status.type === "success" ? <Alert color="success">
                    {status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={edtCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente" value={nome} onChange={e => setNome(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Nome do Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Nome da Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Uf</Label>
                        <Input type="text" name="uf" placeholder="Nome do Estado" value={uf} onChange={e => setUf(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="text" name="nascimento" placeholder="Data de Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="info" disabled>Editando...
                            <Spinner size="sm" color="primary" children="" />
                        </Button> :
                        <Button type="submit" outline color="info m-1">Editar</Button>}
                </Form>
            </Container>
        </div>
    );
}