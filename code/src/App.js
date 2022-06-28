import Currencies from './Components/Currencies';
import News from './Components/News';
import Details from './Components/details';
import Exchange from './Components/exchanges'
import {Layout,Menu} from 'antd';
import Home from './Components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import logo from './images/logo2.jpg';
import './App.css';
import 'antd/dist/antd.css';
const {Header,Footer,Sider,Content} =Layout;
function App()
{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/exchanges" element={<Exchange/>}></Route>
    <Route path="/currencies" element={<Currencies/>}></Route>
    <Route path="/news" element={<News/>}></Route>
    <Route path="/:coinId" element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
