export default ()=>{


    return(
        <div className="container--precos">
            <h3>Preços</h3>
        <div className="container--precos--main">    
        <div className="container--preco--inicial">
        <label>De R$ <span>00,00</span></label>
        <input  type="text"  placeholder="0,00"/>
        </div>

        <div className="container--preco--final">
        <label>Até R$ <span>00,00</span></label>
        <input  type="text"  placeholder="0,00"/>
        </div>
        </div>
        </div>
    )
}