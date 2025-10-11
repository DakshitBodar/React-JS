export const addnewProduct = (product) =>{
    return{
        type: "ADD_PRODUCT",
        payload: product
    }
};

export const getAllproduct = () =>{
    return{
        type: "GET_ALL_PRODUCT",
    }
}

export const Deleteproduct = (id) =>{
    return{
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const getproduct = (id) => {
    return {
        type: "GET_PRODUCT",
        payload: id
    }
}

export const updateproduct = (data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: data
    }
}