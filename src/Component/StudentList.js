import React from "react";
import Base from "../Base/Base";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";




function StudentList({students,setStudents}){
    const history=useHistory("");
    
    const deleteStudent=(studId)=>{
        const remainingStudents=students.filter((stud,idx)=>idx !== studId)
        setStudents(remainingStudents)
    }
    
   return(
        <Base>
       <span className="stud-bar"><h3>StudentList</h3><Button onClick={()=>history.push("/add-students")} style={{ width: "10vw" }} variant="contained">Add Students</Button> </span>
        <br/>
        <div className="container">
      
        <div className="card-container">
           
          {students.map((stud,idx)=>(
            <div className="stud-card" key={idx}>
               <h3>{stud.name}</h3>
               <p>{stud.email}</p>
               <p>{stud.country}</p>
               <p>{stud.state}</p>
               <p>{stud.phone}</p>
               <div className="control">
               <button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>{" "}
               <button onClick={()=>deleteStudent(idx)}>Delete</button></div>
               
             </div>
           ))}
        </div>
        </div>

        </Base>
       
    )
}

export default StudentList


