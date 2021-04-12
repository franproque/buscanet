 async function URLBusca(){
    const URL_BASE='http://localhost:3000/'

    let myInit = {
        method: 'GET',
        
        mode: 'cors',
        cache: 'default'
    };

    let myRequest = new Request(URL_BASE, myInit);

    let response = await fetch(myRequest);
    let data = await response.json();
    return data;
    
}



export default URLBusca()
  
