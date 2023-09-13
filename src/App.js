import { useState } from 'react';
import './App.css'
import MenuBackground from './components/Layout/MenuBackGround';
import MenuButtonMain from './MenuButtonMain/Index';
const App =()=>{
  const [boxBackground, setBoxBackground] = useState(false)

  return(
    <div className='container__main'>
      <div className='side__box'>
        <MenuButtonMain />
      </div>
      <div>
      {boxBackground&& <MenuBackground/> };
    
      </div>
    </div>
  );
}
export default App;