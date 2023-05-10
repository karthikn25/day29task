import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../css/sb-admin-2.css';
import "../css/fontawesome-free/css/all.css";
import { useHistory } from "react-router-dom";




function Base({children}){
   const history=useHistory()
   
    return(
        
        <div className="base-design">
          
        <div className="left-content">
        
       <div className="font-style">
        <h4>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
        </h4>
        <br/>
        <hr className="sidebar-divider my-0"></hr>
        <a className="nav-link" href="index.html">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span
             onClick={()=>history.push("/")}
             >Dashboard</span>
        </a>
        <hr className="sidebar-divider my-0"></hr>
        <div className="sidebar-heading"> Interface</div>
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
        </a>
        
                    <div className="bg py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <ul>
                         <a className="collapse-item" href="buttons.html" onClick={()=>history.push("/buttons")}
                         >Buttons</a> <br/><br/>
                         <a className="collapse-item" href="cards.html" onClick={()=>history.push("/cards")}
                         >Cards</a> 
                        </ul>
                    </div>
                   
        
       
        </div>
        </div>
        <div className="right-content">{children}</div>
        
        </div>
    )
}

export default Base