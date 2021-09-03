import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from "./pages/VisualizarCliente/";
import {VisualizarServico} from "./pages/VisualizarServico/";
import {VisualizarPedido} from "./pages/VisualizarPedido/";

function App() {
  return (
    <div>
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
