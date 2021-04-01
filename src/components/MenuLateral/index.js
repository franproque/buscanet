import {React,useState} from 'react'
import './MenuLateral.css'
import Categorias from './Categorias'
import Precos from './Precos'
import Lojas from './Lojas'
export default function(){
const [categoria,setCategoria]=useState(['Artigos','Beleza','Eletronicos'])
const [lojas,setLojas]=useState(['Americanas','Amazon','Mercado Livre'])
return(

<div className="container--menu--lateral">
<Categorias cat={['Artigos','Beleza','Eletronicos']}/>
<Precos/>
<Lojas lojas={lojas}/>
</div>

)


}