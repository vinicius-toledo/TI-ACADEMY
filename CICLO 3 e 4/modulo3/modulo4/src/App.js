import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/';
import { VisualizarCliente } from "./pages/Cliente/VisualizarCliente/";
import { VisualizarServico } from "./pages/Servico/VisualizarServico/";
import { VisualizarPedido } from "./pages/Pedido/VisualizarPedido/";
import { Menu } from './components/Menu';
import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
