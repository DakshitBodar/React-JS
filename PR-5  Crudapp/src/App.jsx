import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  let [task, setTask] = useState({});
  let [taskList, settaskList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [member, setMember] = useState([])
  let [person, setPerson] = useState(["Team Leader", "Manager", "Employee"])
  let [index, setIndex] = useState(-1)

  useEffect(() => {
    setTimeout(() => {
      getLocalstorageData();
    }, 1000);
  }, []);


  let getLocalstorageData = () => {
    let Data = JSON.parse(localStorage.getItem('taskdata'));
    if (Data != null) {
      settaskList(Data);
      setLoading(true)
    }
    else {
      settaskList([])
    }
  }

  let getInputdata = (e) => {

    setTask({ ...task, [e.target.name]: e.target.value })
    let newmember = [...member];

    if (e.target.name === 'member') {
      if (newmember.includes(e.target.value)) {
        let pos = newmember.findIndex((v, i) => v == e.target.value);
        if (pos != -1) {
          newmember.splice(pos, 1)
        }
      } else {
        newmember.push(e.target.value)
      }
      setMember(newmember)
      e.target.value = newmember
    }
    console.log(newmember);
  }

  let submitData = (e) => {
    e.preventDefault();
    let newList = [...taskList];
    if (index != -1) {
      newList[index] = task;
    } else {
      task.id = Math.round(Math.random() * 100);
      newList.push(task);
      toast.success("Record Added Successfully!", {
        position: 'bottom-right'
      })
    }
    settaskList(newList);
    localStorage.setItem('taskdata', JSON.stringify(newList))
    setTask({})
    setLoading(true);
    setMember([]);
    setIndex(-1);
  }

  let removeData = (id) => {
    let newList = [...taskList];
    let pos = newList.findIndex((v, i) => v.id == id);

    if (pos != -1) {
      newList.splice(pos, 1);
      localStorage.setItem('taskdata', JSON.stringify(newList))
      settaskList(newList)
    }
    // console.log(pos);
  }

  let updateData = (id) => {
    let list = [...taskList];
    let pos = list.findIndex((v, i) => v.id == id);

    if (pos != -1) {
      setTask(list[pos]);
      setMember(list[pos].member)
      setIndex(pos);

    } else {
      setIndex(-1);
    }
    // console.log(pos);
  }

  // console.log(task);


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Crud App</h1>

      <form action="post" onSubmit={(e) => submitData(e)}>
        <table border={1} align="center">
          <tr>
            <td>Enter task :</td>
            <td><input type="text" name="task" value={task.task ? task.task : ""} onChange={(e) => getInputdata(e)} /></td>
          </tr>
          <tr>
            <td>Enter type :</td>
            <td><input type="text" name="type" value={task.type ? task.type : ""} onChange={(e) => getInputdata(e)} /></td>
          </tr>

          <tr>
            <td>select priority :</td>
            <td>
              <input type="radio" name='priority' value="urgent" onChange={(e) => getInputdata(e)}
                checked={task.priority == 'urgent' ? 'checked' : ""} />Urgent
              <input type="radio" name='priority' value="overdue" onChange={(e) => getInputdata(e)}
                checked={task.priority == 'overdue' ? 'checked' : ""} />Overdue
            </td>
          </tr>

          <tr>
            <td>Select person:</td>
            <td>
              <select name="person" onChange={(e) => getInputdata(e)}>
                <option value="">---select person---</option>
                {person.map((v, i) => {
                  return (
                    <option value={v} selected={task.person == v ? 'selected' : ""}>{v}</option>
                  )
                })}
              </select>
            </td>
          </tr>

          <tr>
            <td>image :</td>
            <td><input type="text" name='img' onChange={(e) => getInputdata(e)} value={task.img ? task.img : ""} /></td>
          </tr>

          <tr>
            <td>
              Select Team
            </td>
            <td>
              <input type="checkbox" name="member" value="vivek" onChange={(e) => getInputdata(e)}
                checked={member.includes('vivek') ? 'checked' : ""} />vivek
              <input type="checkbox" name="member" value="raj" onChange={(e) => getInputdata(e)}
               checked={member.includes('raj') ? 'checked' : ""}  />raj
              <input type="checkbox" name="member" value="heet" onChange={(e) => getInputdata(e)} 
               checked={member.includes('heet') ? 'checked' : ""} />heet
            </td>
          </tr>

          <tr>
            <td></td>
            <td>{index != -1
              ? <input type="submit" value="Update" />
              :
              <input type="submit" value="Add" />
            }</td>
          </tr>
        </table>
      </form>

      <br /><br />

      <table border={1} align='center' cellPadding={8}>
        <tr>
          <td>No</td>
          <td>Name</td>
          <td>Image</td>
          <td>value</td>
          <td>priority</td>
          <td>selected person</td>
          <td>Select Team</td>
          <td>Action</td>
        </tr>
        {!loading ?
          <p>Loading...</p>
          :
          taskList ?
            taskList.map((v, i) => {
              return (
                <>
                  <tr>
                    <td>{++i}</td>
                    <td>{v.task}</td>
                    <td><img src={v.img} height={100} /></td>
                    <td>{v.type}</td>
                    <td>{v.priority}</td>
                    <td>{v.person}</td>
                    <td>{v.member}</td>
                    <td>
                      <button onClick={(e) => removeData(v.id)}>Delete</button>
                      ||
                      <button onClick={(e) => updateData(v.id)}>Update</button>
                    </td>
                  </tr>
                </>
              )
            })

            : "No Record"
        }
      </table>
      <ToastContainer />
    </>
  )
}

export default App
