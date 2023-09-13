import "./MenuBtnClosePage.css";

const MenuBtnClosePage = () =>{
  function disablePage (event){

    
    event.preventDefault();
  }


  return(
    <div className="container__img">
        <img onClick={disablePage} id="img" src="../img/xis.svg" alt=""/>
    </div>
  );
}
export default MenuBtnClosePage