import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import StudentForm from "./component/StudentForm/StudentForm";
import StudentList from "./component/StudentList/StudentList";
import StudentEdit from "./component/StudentEdit/StudentEdit";
import ViewStudent from "./component/SingleVIew/SingleView";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/Signup";


function App() {
  return (
    <>
    <Header/>
    
      <Routes>
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/edit-student/:id" element={<StudentEdit />} />
        <Route path="/view-student/:id" element={<ViewStudent />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
