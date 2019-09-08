import axios from 'axios';

var urlPrefix = 'http://localhost:3001/api'
var serverUrl = 'http://localhost:3001/'

var getProducts = () => {
    return axios.get(urlPrefix+'/products')
   
}
var getSingleProduct  = (id) => {
    return axios.get(urlPrefix+'/products/'+id)
   
}

var getTypes = () => {
    return axios.get(urlPrefix+'/types')
}
var getSingleType = (id) => {
    return axios.get(urlPrefix+'/types/'+id)
}

var addProduct = (data) => {
    return axios.post(urlPrefix+'/products',data)
}
var updateProduct = (id,data) => {
    return axios.put(urlPrefix+'/products/'+id,data)
}

var deleteProduct = (id) => {
    return axios.delete(urlPrefix+'/products/'+id)

}

var authenticate = (data) => {
    return axios.post(urlPrefix+'/authenticate',data)          
}

var getSingleUser = (id) => {
    return axios.get(urlPrefix+'/users/'+id)
}

export {serverUrl,getProducts,getSingleProduct,getTypes,addProduct,updateProduct,deleteProduct,getSingleType,authenticate,getSingleUser}




