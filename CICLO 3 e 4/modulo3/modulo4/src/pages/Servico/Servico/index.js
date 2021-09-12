import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {/* props = propriedades passadas */
    console.log(props.match.params.id);/* match relaciona os parâmetros*/

    const [data, setData] = useState([]);/* array com 2 informações, "valor e valor atribuido a ele" */
    const [id] = useState(props.match.params.id)/* informar que esse cara foi passado como paramentro, dado inicial é o "ID" */

    useEffect(() => { /* useEffect = Vai criar e instanciar um objeto */
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    console.log(response.data.servico);
                    setData(response.data.servico);/* linha que buga!! */
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                })
        }
        getServico();/* instanciando, colocando dentro dele */
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico"
                            className="btn btn-outline-primary btn-sm">
                            Serviços
                        </Link>
                        <Link to={"/editarservico/" + data.id}
                            className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dd className="col-sm-9">{data.descricao}</dd>
                </dl>
            </Container>
        </div>
    )
}