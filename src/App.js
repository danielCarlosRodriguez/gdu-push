import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/Navbar';
import { Clientes } from './components/pages/Clientes';
import { Home } from './components/pages/Home';
import { Ventas } from './components/pages/Ventas';
import { Sidebar } from './components/Sidebar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
         <Route path='/' exact={true} component={Home}/>
         
          {/* <Route path="/ventas" exact={true} component={Ventas}/>
          <Route path="/clientes" exact={true} component={Clientes}/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
