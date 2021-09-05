import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from "./pages/Cliente/VisualizarCliente/";
import {VisualizarServico} from "./pages/Servico/VisualizarServico/";
import {VisualizarPedido} from "./pages/Pedido/VisualizarPedido/";
import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route path="/VisualizarCliente" component={VisualizarCliente}/>
          <Route path="/VisualizarServico" component={VisualizarServico}/>
          <Route path="/VisualizarPedido" component={VisualizarPedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
