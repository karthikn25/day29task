import './App.css';
import Base from './Base/Base';
import Dashboard from './Component/Dashboard';
import {Switch,Route} from "react-router-dom";
import StudentList from './Component/StudentList';
import TeacherList from './Component/TeacherList';
import { useState } from 'react';
import data from './Component/Data/Data';
import AddStudents from './Component/AddStudents';
import UpdateStudent from './Component/UpdateStudent';
import UpdateTeacher from './Component/UpdateTeacher';
import AddTeachers from './Component/AddTeachers';





function App() {
  const [students,setStudents]=useState(data);
  const [teachers,setTeachers]=useState(data);

  return (
    <div className="App">
     
       <Switch>
       <Route exact path="/">
        <Dashboard/>
       </Route>
      <Route path="/StudentList">
        <StudentList
        students={students}
        setStudents={setStudents}
        />
        </Route>
        <Route path="/add-students">
        <AddStudents
        students={students}
        setStudents={setStudents}
        />
        </Route>
        <Route path="/edit/:id">
        <UpdateStudent
        students={students}
        setStudents={setStudents}
        
        />
        </Route>
        <Route path="/TeacherList">
        <TeacherList
        teachers={teachers}
        setTeachers={setTeachers}
        />
        </Route>
        <Route path="/edit-teacher/:id">
        <UpdateTeacher
        teachers={teachers}
        setTeachers={setTeachers}
        
        />
        </Route>
        <Route path="/add-teacher">
        <AddTeachers
        teachers={teachers}
        setTeachers={setTeachers}
        
        />
        </Route>
       
       
        
        
       </Switch>



      
    </div>
  );
}

export default App;
