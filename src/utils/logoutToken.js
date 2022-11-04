const logoutToken = ()=>{
    try{
        window.localStorage.clear() // triggers clearing of all key value pairs in local storage
    }catch(error){
        return;
    }
}


export default logoutToken;