import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/';
import { VisualizarCliente } from "./pages/Cliente/VisualizarCliente/";
import { VisualizarServico } from "./pages/Servico/VisualizarServico/";
import { VisualizarPedido } from "./pages/Pedido/VisualizarPedido/";
import { Menu } from './components/Menu';
import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';
import {  CadastrarServico } from './pages/Servico/CadastrarServico';
import {  EditarServico} from './pages/Servico/EditarServico';
import {  CadastrarCliente } from './pages/Cliente/CadastrarCliente';
import {  CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import {  EditarCliente} from './pages/Cliente/EditarCliente';
import {  EditarPedido} from './pages/Pedido/EditarPedido';


function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/visualizarCliente" component={VisualizarCliente} />
          <Route path="/visualizarServico" component={VisualizarServico} />
          <Route path="/visualizarPedido" component={VisualizarPedido} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/cadastrarservico/" component={CadastrarServico} />
          <Route path="/editarservico/:id" component={EditarServico} />
          <Route path="/editarcliente/:id" component={EditarCliente} />
          <Route path="/editarpedido/:id" component={EditarPedido} />
          <Route path="/cadastrarpedido/" component={CadastrarPedido} />
          <Route path="/cadastrarcliente/" component={CadastrarCliente} />

          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
