import './App.css'
import MenuBackground from './components/Layout/MenuBackGround';
import MenuButtonMain from './components/Layout/MenuButtonMain/Index';

const App =()=>{


  return(
    <div className='container__main'>
      <div className='side__box'>
        <MenuButtonMain />
      </div>
      <div>
      <MenuBackground/>
      </div>
    </div>
  );
}
export default App;