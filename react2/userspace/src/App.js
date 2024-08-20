import logo from './logo.svg';
import './App.css';
import Navbars from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <body>
  <Navbars/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    {/* <Route path='/' element={<Home/>}></Route> */}
    <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
 
    </body>
  );
}

export default App;
