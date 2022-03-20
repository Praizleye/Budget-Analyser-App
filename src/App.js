import React, {useState} from 'react';

import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Btn from './components/Btn';
import AddBudget from './components/AddBudget';
import {FaPlus} from 'react-icons/fa';

function App() {
  //write js code here
 
  const addBtnClick = () =>{
    console.log (someExamples)
   // console.log (someExamples.filter((el)=> el.id > 101))
  
  }
  
const submitForm = (e) => {
  e.preventDefault();
  setSomeExamples([...someExamples, {
  text: textForm,
  amount: amountForm,
  } ]
)
 settextForm("");
 setamountForm("");


  }
  
  
  
  const [someExamples, setSomeExamples] = useState( [
   {
      name: "example1",
      id: 101,
      text: "Bought Breakfast",
      amount: 300,
      date: '12th March 2022',
    },
    {
      name: "example2",
      id: 102,
      text: "Bought lunch",
      amount: 200,
      date: '12th March 2032',
    },
    {
      name: "example3",
      id: 103,
      text: "Bought dinner",
      amount: 400,
      date: '12th March 2012',
    },
   ]
  )
  
    
  const [textForm, settextForm]= useState ("");
  const [amountForm, setamountForm]= useState ("");
//  const [dateForm, setdateForm]= useState ("");
  
  return (
    <div className="App-Container">
    <div className="Budget-Container">
    <Header />
    { someExamples.length > 0 ?
    <Lists 
    someExamples = {someExamples}
    setSomeExamples = {setSomeExamples}
    /> : ("Nothing to display")
    }
    
    <AddBudget
    someExamples = {someExamples}
    setSomeExamples = {setSomeExamples}
    text = {textForm}
    amount = {amountForm}
    settextForm = {settextForm}
    setamountForm = {setamountForm}
    submitForm = {submitForm}
    />
    </div>
    <div className= "nav">
  <button onClick={addBtnClick} 
    className="Btnstyle"> 
    <FaPlus />ADD </button>
    </div>
   </div>
  );
}

export default App;
