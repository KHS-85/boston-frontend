import axios from 'axios'

// base URL
const api = {
    baseUrl: "http://localhost:5017/"
}



//PRODUKTER 


//Hent alle products
export const getAllProducts =  () => {

    //http://localhost:5017/products        
    let response =  axios.get(api.baseUrl + "products")
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

//Hent alle abouts
export const getAllAbouts =  () => {

    //http://localhost:5017/abouts        
    let response =  axios.get(api.baseUrl + "abouts")
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

//Hent alle sliders
export const getAllSliders =  () => {

    //http://localhost:5017/sliders        
    let response =  axios.get(api.baseUrl + "sliders")
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

// Hent udvalgt produkt
export const getProduct = (productID) => {

    //http://localhost:5017/products/admin/5fb501b4bbb1d24e00fece99       
    let response = axios.get(api.baseUrl + "products/" + productID)
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

// Hent udvalgt about
export const getAbout = (aboutID) => {

    //http://localhost:5017/abouts/admin/5fb501b4bbb1d24e00fece99       
    let response = axios.get(api.baseUrl + "abouts/" + aboutID)
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}


//POST -  http://localhost:5017/products/admin
export const createProduct = ( newProduct ) => {

    let formdata = new FormData(newProduct)

    //http://localhost:5017/products        
    let response = axios.post(api.baseUrl + "products/admin", formdata, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

//PUT Product -  http://localhost:5017/products/admin
export const editProduct =  ( editProduct, productID ) => {

    let formdata = new FormData(editProduct)

    //http://localhost:5017/products/admin/5fb501b4bbb1d24e00fece99       
    let response =  axios.put(api.baseUrl + "products/admin/" + productID, formdata, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

//PUT About -  http://localhost:5017/abouts/admin
export const editAbout =  ( editAbout, aboutID ) => {

    let formdata = new FormData(editAbout)

    //http://localhost:5017/abouts/admin/5fb501b4bbb1d24e00fece99       
    let response =  axios.put(api.baseUrl + "abouts/admin/" + aboutID, formdata, {withCredentials: true} )
        .then(res => { return res.data })
        .catch(error => {return "error"})

        return response

}

// DELETE - 

export const deleteProduct = (productID) => {


    //http://localhost:5017/products/admin/:ID 
    let response = axios.delete(api.baseUrl + 'products/admin/' + productID, {withCredentials: true})   
    .then(res => {return res.data})
    .catch(error => {return "error"})

    return response



}


// AUTH -----------------------------

// Login
export const loginAdmin = (logindata) => {

    let formdata = new FormData(logindata)

    // http://localhost:5017/login/login
    let response = axios.post(api.baseUrl + "login/login", formdata, { withCredentials: true } )
    .then( res => {
        return res.data
    } )

    .catch(error => {
        return "error"
    } )

    return response

}

//Logout

export const logoutAdmin = () =>{

    // http://localhost:5017/login/logout
    let response = axios.get(api.baseUrl + "login/logout",{ withCredentials: true } )
    .then( res => {
        return res.data

    } )

    .catch(error => {

        return "error"

    } )

    return response

}

//tjek login status -> er jeg stadig logget ind?
export const loginCheck = (  ) =>   {

    // http://localhost:5017/login/logout
    let response = axios.get(api.baseUrl + "login/loggedin", { withCredentials: true } )
    .then( res => {
        return res.data

    } )

    .catch(error => {

        return "error"

    } )

    return response



}




