import React,{useState} from "react";
import Base from "../Base/Base";
import data from "./Data/Data";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";


function TeacherList({teachers,setTeachers}){
  const history=useHistory("");
   
   const deleteTeacher=(teachId)=>{
       const remainingTeachers=teachers.filter((teach,idx)=>idx !== teachId)
       setTeachers(remainingTeachers)
   }
    return(
      <Base>
    
      
      <span className="stud-bar"><h3>Teachers List</h3><Button onClick={()=>history.push("/add-teacher")} style={{ width: "10vw" }} variant="contained">Add Teachers</Button> </span>
        <br/>
        <div className="container">
      
        <div className="card-container">
           
          {teachers.map((teach,idx)=>(
            <div className="stud-card" key={idx}>
               <h3>{teach.name}</h3>
               <p>{teach.email}</p>
               <p>{teach.country}</p>
               <p>{teach.state}</p>
               <p>{teach.phone}</p>
               <div className="control">
               <button onClick={()=>history.push(`/edit-teacher/${idx}`)}>Edit</button>{" "}
               <button onClick={()=>deleteTeacher(idx)}>Delete</button></div>
               
             </div>
           ))}
        </div>
        </div>

      </Base>

    )
}







export default TeacherList


function AddTeachers({teachers,setTeachers}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [country,setCountry]=useState("");
    const [state,setState]=useState("");
    const [phone,setPhone]=useState("");
    const createTeacher = () =>{
      const newTeachers={
         name:name,
         email:email,
         country:country,
         state:state,
         phone:phone,
      }
     setTeachers([...teachers,newTeachers])
     }
    
    
    return(
        <><><><><><><span className="stud-bar"><h3>Add TeacherList</h3></span><br /><FormControl fullWidth sx={{ m: 1 }} variant="standard">
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
        </FormControl></><br /><br /><Button onClick={createTeacher} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Add</Button></>
  
  
    )
}


