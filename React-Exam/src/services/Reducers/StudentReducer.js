const initialstate = {
  students:  [],
  isLoading: false,
  student: null,
  isError : "",
  isCreated : false,
  isUpdated : false,
};

export const Studentreducer = (state = initialstate, action) => {
  switch (action.type) {

    case "LOADING":
      return{
        ...state,
        isLoading : true
      }


    case "ADD_STUDENT_SUC":
      return {
        ...state,
        isCreated : true
      };
      
    case "ADD_STUDENT_REJ":
      return {
        ...state,
        isError : action.massage
      };

    case "GET_ALL_STUDENT_SUC":
      return {
        ...state,
        students: action.payload,
        isLoading: false,
        isCreated : false,
        isUpdated : false,
        isError : ""
      };

    case "GET_ALL_STUDENT_REJ":
      return {
        ...state,
        isError: action.massage,
        isLoading: false,
        isCreated : false
      };

    case "DELETE_STUDENT_REJ":
      return {
        ...state,
        isError: action.massage,
      };

    case "GET_STUDENT_SUC":
      return {
        ...state,
        student: action.payload
      };
    case "GET_STUDENT_REJ":
      return {
        ...state,
        isError : action.massage
      };

    case "UPDATE_STUDENT_SUC":
      return {
        ...state,
        student: null,
        isUpdated : true
      };
    case "UPDATE_STUDENT_REJ":
      return {
        ...state,
        
      };

    default:
      return state;
  }
};

export default Studentreducer;
