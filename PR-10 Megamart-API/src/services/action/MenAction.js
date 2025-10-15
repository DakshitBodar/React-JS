import axios from "axios";

export const addnewProduct = (product) => {
  return {
    type: "ADD_PRODUCT_SUC",
    payload: product,
  };
};
export const addnewProductRej = (msg) => {
  return {
    type: "ADD_PRODUCT_REJ",
    payload: msg,
  };
};


export const getAllproduct = (data) => {
  return {
    type: "GET_ALL_PRODUCT_SUC",
    payload: data,
  };
};
export const getAllproductRej = (msg) => {
  return {
    type: "GET_ALL_PRODUCT_REJ",
    payload: msg,
  };
};


export const deleteProductRej = (msg) => {
  return {
    type: "DELETE_PRODUCT_REJ",
    payload: msg,
  };
};

export const Deleteproduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};


export const getproduct = (id) => {
  return {
    type: "GET_PRODUCT_SUC",
    payload: id,
  };
};
export const getproductRej = (msg) => {
  return {
    type: "GET_PRODUCT_REJ",
    payload: msg,
  };
};


export const updateproduct = (data) => {
  return {
    type: "UPDATE_PRODUCT_SUC",
    payload: data,
  };
};
export const updateproductRej = (msg) => {
  return {
    type: "UPDATE_PRODUCT_REJ",
    payload: msg,
  };
};

const loading = () => {
  return {
    type: "LOADING",
  };
};

export const getAllproductAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => dispatch(getAllproduct(data)))
      .catch((err) => dispatch(getAllproductRej(err.message)));
  };
};


export const addnewProductAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());
    axios.post("http://localhost:3000/products", data)
      .then(() => dispatch(addnewProduct(data)))
      .catch((err) => dispatch(addnewProductRej(err.message)));
  };
};


export const DeleteproductAsync = (id) => {
  return (dispatch) => {
    dispatch(loading());
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => dispatch(getAllproductAsync()))
      .catch((err) => dispatch(deleteProductRej(err.message)));
  };
};

export const getproductAsync = (id) => {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => dispatch(getproduct(res.data)))
      .catch((err) => dispatch(getproductRej(err.message)));
  };
};


export const updateproductAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());
    axios.put(`http://localhost:3000/products/${data.id}` , data)
      .then((res) => dispatch(updateproduct(res.data)))
      .catch((err) => dispatch(updateproductRej(err.message)));
  };
};
