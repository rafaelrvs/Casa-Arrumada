
import './App.css';
import MenuAbove from './components/layout/MenuAbove';
import SideBox from './components/layout/SideBox';

function App() {
  return (
    <div className="App">
        <div className="menuAbove__container">
          <MenuAbove/>
          
        </div>
        
        <div className="side__box__container">
          <SideBox/>
          

        </div>

     
    </div>
  );
}

export default App;
