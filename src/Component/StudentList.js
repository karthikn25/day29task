import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import data from "./Data/Data";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';



function StudentList(){
    const [students,setStudents]=useState(data);
    const [editStudent,setEditStudent]=useState({});
    const deleteStudent=(studId)=>{
        const remainingStudents=students.filter((stud,idx)=>idx !== studId)
        setStudents(remainingStudents)
    }
    
   return(
        <Base>
        <AddStudents
        students={students}
        setStudents={setStudents}
        />
        <br/><br/>
        <UpdateStudent
        students={students}
        setStudents={setStudents}
        editStudent={editStudent}
        />
        <br/><br/>
       <span className="stud-bar"><h3>StudentList</h3> </span>
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
               <button onClick={()=>setEditStudent(stud)}>Edit</button>{" "}
               <button onClick={()=>deleteStudent(idx)}>Delete</button></div>
               
             </div>
           ))}
        </div>
        </div>

        </Base>
       
    )
}

export default StudentList
function AddStudents({students,setStudents}){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [country,setCountry]=useState("");
  const [state,setState]=useState("");
  const [phone,setPhone]=useState("");
  const createStudent = () =>{
    const newStudents={
       name:name,
       email:email,
       country:country,
       state:state,
       phone:phone,
    }
   setStudents([...students,newStudents])
   }
  return(
   <><><><><><><span className="stud-bar"><h3>Add StudentList</h3></span><br /><FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-amount">Enter NAME</InputLabel>
      <Input
        id="standard-adornment-amount"
        value={name}
        onChange={(e) => setName(e.target.value)} />
    </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter Email</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter Country</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={country}
          onChange={(e) => setCountry(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter State</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={state}
          onChange={(e) => setState(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter Phone No</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
      </FormControl></><br /><br /><Button onClick={createStudent} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Add</Button></>


  )
}

function UpdateStudent({students,setStudents,editStudent}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [country,setCountry]=useState("");
    const [state,setState]=useState("");
    const [phone,setPhone]=useState("");
    
    useEffect(()=>{
      setName(editStudent.name)
      setEmail(editStudent.email)
      setCountry(editStudent.country)
      setState(editStudent.state)
      setPhone(editStudent.phone)
    },[editStudent])
   function updateStudent(){
     console.log(editStudent)
   }

   
    return(
    <><><><><><><><span className="stud-bar"><h3>Update Student</h3></span><br /></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-amount">Enter NAME</InputLabel>
      <Input
        id="standard-adornment-amount"
        value={name}
        onChange={(e) => setName(e.target.value)} />
    </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter Email</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter Country</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={country}
          onChange={(e) => setCountry(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter State</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={state}
          onChange={(e) => setState(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter Phone No</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
      </FormControl></><br /><br /><Button onClick={updateStudent} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Update</Button></>

  )
}