import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Pedido = (props) => {
    console.log(props.match.params.id);

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id)

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    console.log(response.data.pedido);
                    setData(response.data.pedido);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                })
        }
        getPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido"
                            className="btn btn-outline-primary btn-sm">
                            Lista de Pedidos
                        </Link>
                        <Link to={"/editarpedido/" + data.id}
                            className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">ClienteId</dt>
                    <dd className="col-sm-9">{data.ClienteId}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">ServiçoId</dt>
                    <dd className="col-sm-9">{data.ServicoId}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Valor</dt>
                    <dd className="col-sm-9">{data.valor}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Data</dt>
                    <dd className="col-sm-9">{data.data}</dd>
                </dl>
            </Container>
        </div>
    )
}