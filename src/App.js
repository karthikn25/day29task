
import './App.css';
import Base from './Base/Base';
import Dashboard from './Component/Dashboard';
import {Switch,Route} from "react-router-dom";
import Card from './Component/Card';
import Button from './Component/Button';




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

       </Switch>



      
    </div>
  );
}

export default App;
