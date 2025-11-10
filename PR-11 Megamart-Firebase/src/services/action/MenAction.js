import axios from "axios";
import {  collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../component/config/Firebase.config";

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
  return async (dispatch) => {
    dispatch(loading());
    try {
      let res = await getDocs(collection(db, "menproduct"));
      let result = [];
      res.forEach((doc) => {
        result.push(doc.data());
      });
      dispatch(getAllproduct(result));
    } catch (error) {
      dispatch(getAllproductRej(error.message));
    }

    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(getAllproduct(data)))
    //   .catch((err) => dispatch(getAllproductRej(err.message)));
  };
};
export const addnewProductAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      // let res = await addDoc(collection(db, "menproduct"), data); // auto-generate ID

      await setDoc(doc(db, "menproduct", `${data.id}`), data);
      dispatch(addnewProduct());
    } catch (error) {
      dispatch(addnewProductRej(error.message));
    }
  };
};

export const DeleteproductAsync = (id) => {
  return async(dispatch) => {
    dispatch(loading());
    try {
      await deleteDoc(doc(db ,"menproduct",`${id}`));
      dispatch(getAllproductAsync());
    } catch (error) {
      dispatch((deleteProductRej(error.message)))
    }
      // axios
      // .delete(`http://localhost:3000/products/${id}`)
      // .then(() => dispatch(getAllproductAsync()))
      // .catch((err) => dispatch(deleteProductRej(err.message)));
  };
};

export const getproductAsync = (id) => {
  return async(dispatch) => {
    dispatch(loading());
    try {
      let res = await getDoc (doc(db, "menproduct" ,`${id}`))
      dispatch(getproduct(res.data()))
    } catch (error) {
      dispatch(getproductRej(error.message));
    }
    // axios
    //   .get(`http://localhost:3000/products/${id}`)
    //   .then((res) => dispatch(getproduct(res.data)))
    //   .catch((err) => dispatch(getproductRej(err.message)));

  };
};

export const updateproductAsync = (data) => {
  return async(dispatch) => {
    dispatch(loading());
    try {
      await updateDoc (doc (db ,"menproduct",`${data.id}`), data)
      dispatch(updateproduct())
    } catch (error) {
      dispatch(updateproductRej(error.message))
    }

    // axios
    //   .put(`http://localhost:3000/products/${data.id}`, data)
    //   .then((res) => dispatch(updateproduct(res.data)))
    //   .catch((err) => dispatch(updateproductRej(err.message)));
  };
};
