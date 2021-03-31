export default (props)=>{

    return(
        <div className="container--lojas">
            <h3>Lojas</h3>
            <ul>
                {props.lojas.map((x,key)=>{
                    return <li> <input type="checkbox" key={key}/> <h4>{x}</h4> </li>
                })}
            </ul>
        </div>
    )
}