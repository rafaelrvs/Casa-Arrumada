/**
 * Upper box representation
*/

import TextContentInSideBox from "../TextContentInSideBox";
import "./BoxTop.css";

const BoxTop =()=>{
  return(
    <div className="container__BoxTop">
      <div className="content">
      <TextContentInSideBox/> Cronometro
      <TextContentInSideBox/> Anotação
      <TextContentInSideBox/> Exercicio laboral
      <TextContentInSideBox/> importante
      </div>
    </div>
  );
}
export default BoxTop;
