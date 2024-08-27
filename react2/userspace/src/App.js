import logo from './logo.svg';
import './App.css';
import Navbars from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Gallery from './components/gallery';
import About from './components/about';
import Services from './components/services';
import Table from './components/table';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <body>
  <Navbars/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/table' element={<Table/>}></Route>
  </Routes>
  </BrowserRouter>
 
    </body>
  );
}

export default App;
