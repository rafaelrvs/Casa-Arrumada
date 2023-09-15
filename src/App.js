/*Criação da interface inicial
Layout responsavel por armazenar conteudo principal
*/

import "./App.css"
import BoxTop from "./components/Layout/BoxTop"
import SideBoxLeft from "./components/Layout/SideBoxLeft"

const App =()=>{
  return(
    <div className="App">
       <div>
        <SideBoxLeft/>
       </div>
       <div className="top__container_App">
        <BoxTop/>
       </div>
    </div>
  )
}
export default App