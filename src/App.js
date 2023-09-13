import './App.css'
import MenuBackground from './components/Layout/MenuBackGround';
import MenuButtonMain from './components/Layout/MenuButtonMain/Index';

const App =()=>{


  return(
    <div>
      <div>
      <MenuBackground/>
      </div>
      <div>
        <MenuButtonMain />
      </div>
    </div>
  );
}
export default App;