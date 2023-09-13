import ThirteenFirstSalary from "../../Itens/OpitionsChosen/ThirteenFirstSalary";
import MenuBtnClosePage from "../MenuBtnClosePage";
import"./MenuBackground.css"
const MenuBackground = () =>{

   return(
    <div >
          <div className="containerMenuBtn">
            <MenuBtnClosePage />
          </div>
          <div className="two__container__main">
            <ThirteenFirstSalary />
         </div>


    </div>
   );
}
export default MenuBackground;