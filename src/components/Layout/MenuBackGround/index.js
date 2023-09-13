
import MenuBtnClosePage from "../MenuBtnClosePage";
import MenuButtonMain from "../MenuButtonMain/Index";
import"./MenuBackground.css"


const MenuBackground = ({menuState}) =>{
  console.log(menuState);

   return(
    <div >
          <div className="containerMenuBtn">
            <MenuBtnClosePage />
          </div>
          <div>
         </div>


    </div>
   );
}
export default MenuBackground;