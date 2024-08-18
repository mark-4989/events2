import logo from './logo.svg';
import './App.css';
import Navbars from './components/navbar';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
  <Navbars/>
  <Home/>
    </div>
  );
}

export default App;
