import './App.css';
import Base from './Base/Base';
import Dashboard from './Component/Dashboard';
import {Switch,Route} from "react-router-dom";
import Card from './Component/Card';
import Button from './Component/Button';
import Animations from './Component/Animations';
import Colors from './Component/Colors';
import Borders from './Component/Borders';
import Other from './Component/Other';
import StudentList from './Component/StudentList';





function App() {
  return (
    <div className="App">
     
       <Switch>
       <Route exact path="/">
        <Dashboard/>
       </Route>
       <Route path="/buttons">
        <Button/>
       </Route>
       <Route path="/cards">
        <Card/>
       </Route>
       <Route path="/Animations">
        <Animations/>
      </Route>
      <Route path="/Colors">
        <Colors/>
      </Route>
      <Route path="/Borders">
        <Borders/>
      </Route>
      <Route path="/Other">
        <Other/>
      </Route>
      <Route path="/StudentList">
        <StudentList/>
        </Route>
        
       </Switch>



      
    </div>
  );
}

export default App;
