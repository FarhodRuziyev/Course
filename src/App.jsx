import { Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import About from "./pages/about/about";
import Layout from "./component/layout/leyout";
import Template from "./pages/template/temp";
import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <Layout>
          <div>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/template' element={ <Template/> }/>
          </Routes>
          </div>
        </Layout>
      </div>
    </>
  )
};

export default App ;
