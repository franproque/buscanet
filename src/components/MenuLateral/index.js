import {React,useState,useEffect} from 'react'
import './MenuLateral.css'
import Categorias from './Categorias'
import Precos from './Precos'
import Lojas from './Lojas'
import Busca from '../../fetch'
export default function(){
const [categoria,setCategoria]=useState([])
const [lojas,setLojas]=useState([])
useEffect(()=>{
    Busca.then(data=>{
     
      var rowsVolta=[]
      
      data.shops.map((element,p)=>(
        rowsVolta.push(element.title.toUpperCase())
        
      ) ) 
      
      setLojas(rowsVolta);

      var rowsCategoria=[]
      data.categories.map((element,p)=>(
          rowsCategoria.push(element.title.toUpperCase())
      ))
          setCategoria(rowsCategoria)
    })
   
  },[]);
return(

<div className="container--menu--lateral">
<Categorias cat={categoria}/>
<Precos/>
<Lojas lojas={lojas}/>
</div>

)


}