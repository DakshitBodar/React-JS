import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc, } from "firebase/firestore";
import { db } from "../../component/config/firebase.config";

export const addnewStudent = (student) => ({
    type: "ADD_STUDENT_SUC",
    payload: student,
});

export const addnewStudentRej = (msg) => ({
    type: "ADD_STUDENT_REJ",
    payload: msg,
});

export const getAllstudent = (data) => ({
    type: "GET_ALL_STUDENT_SUC",
    payload: data,
});

export const getAllstudentRej = (msg) => ({
    type: "GET_ALL_STUDENT_REJ",
    payload: msg,
});


export const deleteStudentRej = (msg) => {
  return {
    type: "DELETE_STUDENT_REJ",
    payload: msg,
  };
};

export const DeleteStudent = (id) => {
  return {
    type: "DELETE_STUDENT",
    payload: id,
  };
};

export const getstudent = (id) => {
  return {
    type: "GET_STUDENT_SUC",
    payload: id,
  };
};
export const getstudentRej = (msg) => {
  return {
    type: "GET_STUDENT_REJ",
    payload: msg,
  };
};

export const updatestudent = (data) => {
  return {
    type: "UPDATE_STUDENT_SUC",
    payload: data,
  };
};
export const updatestudentRej = (msg) => {
  return {
    type: "UPDATE_STUDENT_REJ",
    payload: msg,
  };
};

const loading = () => {
    return {
        type: "LOADING",
    };
};

export const addnewStudentAsync = (data) => {
    return async (dispatch) => {
        try {
            await setDoc(doc(db, "students", data.StudentId), data);
            dispatch(addnewStudent(data));
        } catch (error) {
            dispatch(addnewStudentRej(error.message));
        }
    };
};


export const getAllstudentAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await getDocs(collection(db, "students"));
            let result = res.docs.map((doc) => doc.data());
            dispatch(getAllstudent(result));
        } catch (error) {
            dispatch(getAllstudentRej(error.message));
        }

    };
};


export const DeleteStudentAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await deleteDoc(doc(db, "students", `${id}`));
      dispatch(getAllstudentAsync());
    } catch (error) {
      dispatch(deleteStudentRej(error.message));
    }

  };
};

export const getstudentAsync = (id) => {
    return async (dispatch) => {
      dispatch(loading());
      try {
        let res = await getDoc(doc(db, "students", `${id}`));
        dispatch(getstudent(res.data()));
      } catch (error) {
        dispatch(getstudentRej(error.message));
      }

    };
  };

export const updatestudentAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await updateDoc(doc(db, "students", `${data.id}`), data);
      dispatch(updatestudent());
    } catch (error) {
      dispatch(updatestudentRej(error.message));
    }
  };
};

