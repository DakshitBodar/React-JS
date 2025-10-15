const initialstate = {
  products:  [],
  isLoading: false,
  product: null,
  isError : "",
  isCreated : false,
  isUpdated : false,
};

const Menreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOADING":
      return{
        ...state,
        isLoading : true
      }
    case "ADD_PRODUCT_SUC":
      return {
        ...state,
        isCreated : true
      };
    case "ADD_PRODUCT_REJ":
      return {
        ...state,
        isError : action.massage
      };

    case "GET_ALL_PRODUCT_SUC":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isCreated : false,
        isUpdated : false,
        isError : ""
      };

    case "GET_ALL_PRODUCT_REJ":
      return {
        ...state,
        isError: action.massage,
        isLoading: false,
        isCreated : false
      };

    case "DELETE_PRODUCT_REJ":
      return {
        ...state,
        isError: action.massage,
      };

    case "GET_PRODUCT_SUC":
      return {
        ...state,
        product: action.payload
      };
    case "GET_PRODUCT_REJ":
      return {
        ...state,
        isError : action.massage
      };

    case "UPDATE_PRODUCT_SUC":
      return {
        ...state,
        product: null,
        isUpdated : true
      };
    case "UPDATE_PRODUCT_REJ":
      return {
        ...state,
        
      };

    default:
      return state;
  }
};

export default Menreducer;
