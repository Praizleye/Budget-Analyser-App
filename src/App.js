import React, {useState, useEffect} from 'react';
import {
 Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Btn from './components/Btn';
import AddBudget from './components/AddBudget';
import Nav from './components/Nav';
import Analysis from './components/Analysis';
import About from './components/About';

function App() {
  //write js code here
 
  const addBtnClick = () =>{
  
  setToggler(!Toggler);
  setwatchToggler(!watchToggler);
  setremEvent(!remEvent)
  }
  

  
  const [someExamples, setSomeExamples] = useState([]);
  
  useEffect( ()=>{
    const BudgetLists = async () => {
    const getbudgetfrmserver = await fetchLists();
    setSomeExamples(getbudgetfrmserver)
    }
    
    BudgetLists();
  },[])
  
  // fetching lists from server 
  const fetchLists = async() => {
    const response = await fetch (`http://localhost:5000/BudgetLists`);
    const data = await response.json();
    console.log (data); 
    return data;
  }
    
  const [textForm, settextForm]= useState ("");
  const [amountForm, setamountForm]= useState ("");
  const [dateForm, setdateForm]= useState ("");
  
 const [watchToggler, setwatchToggler]= useState (false);
 
 const [Toggler, setToggler]= useState (false);
  
  const [remEvent, setremEvent] = 
  useState(false);
  
  return (
    
    <div className="App-Container">
    <Header />
    
<Routes>

<Route path ="/" element ={
    <div className="Budget-Container">
    
    <h2 style={{textAlign:"center", marginTop: ".5rem"}}> Expenditure </h2>
    <div className ={watchToggler ? "styleWatchToggler" : ""}
    >
    { someExamples.length > 0 ?
    <Lists 
    remEvent = {remEvent}
    setremEvent = {setremEvent}
    someExamples = {someExamples}
    setSomeExamples = {setSomeExamples}
    /> : ("Nothing to display")
    }
    </div>
    </div>
}>
    </Route>
<Route path= "analysis" element = {
    <Analysis />} />
    
<Route path= "about" element = {
    <About />} />
    
  </Routes>
    
{Toggler ?
    <AddBudget className = "customAdd"
    someExamples = {someExamples}
    setSomeExamples = {setSomeExamples}
    text = {textForm}
    amount = {amountForm}
    date = {dateForm}
    settextForm = {settextForm}
    setamountForm = {setamountForm}
    setdateForm = {setdateForm}
    setToggler = {setToggler}
    Toggler = {Toggler}
    setwatchToggler = {setwatchToggler}
    />
    : ""
    }
    
    <Nav addBtnClick = {addBtnClick}/>
    
  
   </div>
   
  );
}

export default App;
