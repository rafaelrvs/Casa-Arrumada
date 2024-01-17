
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Produtos from './components/Produtos/Produtos'
import Contato from './components/Contato/Contato'
import Pagina404 from './components/Pagina404/Pagina404'
import Header from './components/Header/Header'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
     
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="Produtos" element={<Produtos/>}/>
        <Route path="Contatos" element={<Contato/>}/>
        <Route path="*" element={<Pagina404/>}/>
      </Routes>

    </BrowserRouter>
      
    
  

    </>
  )
}

export default App
