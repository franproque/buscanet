import './MenuLateral.css'
import { AiOutlineRight } from "react-icons/ai";
export default (props)=>{

    return(
        <div className="container--categorias">
              <h3>
            Categorias
        </h3>
        <ul>
         
        {props.cat.map((x,key)=>{
            {console.log('teste')}
            return <li key={key}>{x} <AiOutlineRight/></li> 
        })}
        </ul>
        <button>Ver todas as 30 Categorias</button>
        </div>
      
    )
}