import "./ClosePage.css";
const ClosePage =()=>{



  const reloadPage =(event)=>{
    window.location.reload();
    event.preventDefault();
  }
  return(
    <div>
       <img id="close"src="./img/xis.svg" alt="close page" onClick={reloadPage} />
    </div>
  );
}
export default ClosePage;