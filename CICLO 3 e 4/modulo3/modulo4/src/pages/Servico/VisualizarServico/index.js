import axios from "axios";/* irá fazer uso dele sempre! Para isso iremos criar um lugar */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap"
import { api } from "../../../config";
/* criação de método GET/SET para obter os dados 
GET - RECUPERAR INFORMAÇÕES / DADOS
SET - ALTERAÇÃO / INCLUSÃO
*/

export const VisualizarServico = () => {

    const [data, setData] = useState([]); /* retorno de dados data=retorno setData= dados a incluir com Array vazio para receber os dados*/
    /* função assync permite executar ela sem um retorno - INDEPENDENTE*/

    /* Linha para quando der erro de não encontrar servidor */
    const [status, setStatus] = useState({/* valores nos objetos! */
        type: "",/* tipo de erro dado */
        message: ""
    });

    const getServicos = async () => {
        /* await = sem espera / axios pode usar .get.put.delete.... */
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.servicos);/* servicos do Controller.js */
                setData(response.data.servicos);
            }).catch(() => {
                setStatus({/* substitui o console.log */
                    type: "Error",
                    message: "Erro: Não foi possível conectar a API."
                });
            });
    }

    /* objetos tem que ser instanciados \/ */
    useEffect(() => {
        getServicos();
    }, []);/* retorno de dados no Array!!! Caso não coloque, executa sem parar */

    /* FUNÇÃO DE APAGAR */
    const apagarServico = async (idServico) => {
        console.log(idServico);

        const headers = {
            "Content-Type": "application/json"
        }
        await axios.delete(api + "/apagarservico/" + idServico, { headers })
            .then((response) => {
                console.log(response.data.error);
                getServicos();/* <-- função para atualizar a página */
            })
            .catch(() => {
                setStatus({
                    type: "error",
                    message: "Erro: Não foi possível se conectar a API"
                });
            })
    }

    return (
        <div className="p-3">{/* Criação de Tabelas puxando a do banco*/}
            <Container>
                {/* parecido com um If ? SENAO : Else*/}
                {/* Inserir antes da tabela para mostra na tela! */}
                {status.type === "Error" ? <Alert color="danger">{status.message}</Alert> : ""}

                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações dos Serviços</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarservico"
                            className="btn btn-outline-primary btn-sm">
                            Cadastrar Serviço
                        </Link>
                    </div>
                </div>

                <Table bordered>
                    <thead>{/* cabeçalho */}
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>{/* corpo do texto */}
                        {/* map=vai inserindo novos dados por linha*/}
                        {/* PEGO MEU ARRAY, MAPEIO POR ITENS (GRUPOS) E EXIBO ELE COMO UMA LINHA DA TABELA <TR>  COM BASE EM USO DE ID*/}
                        {data.map(item => (
                            <tr key={item.id}>{/* linha nova com itens únicos / key para esses ID's*/}
                                <td>{item.id}</td>{/* coluna id - linha única*/}
                                <td>{item.nome}</td>{/* coluna nome */}
                                <td>{item.descricao}</td>{/* descrição */}
                                <td className="text-center">
                                    {/* criação de botao / item.id puxa id servico*/}
                                    <Link to={"/servico/" + item.id}
                                        /* botao, quando passar mouse, botao pequeno */
                                        className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                                    <Link to={"/editarservico/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    {/* Delete através do ID */}
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarServico(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}