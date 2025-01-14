export const isLoggedIn = ()=>{
    let data = localStorage.getItem("jwt_token");
    if(data == null)
        return false;
    else
        return true;
}

//Get token from LocalStorage
export const getToken =() =>{
    if(isLoggedIn()){
        //return 
        return JSON.parse(localStorage.getItem("jwt_token"));
    }else{
        return null;
    }
} 