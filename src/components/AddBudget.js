import React, {useState} from 'react';
import DateProps from './DateProps';


const AddBudget = ({
  someExamples,
    deleteClick,
    setSomeExamples,
    setdateForm,
    settextForm,
    setamountForm,
    text,
    amount,
    date,
    Toggler,
    setToggler,
    setwatchToggler
  }) => {


const submitForm = async (e) => {
  const myBudgetText = {text, amount, date}
  //const myBudgetAmount = {amount}
  
  
  e.preventDefault();
  if(!text || !amount){
    alert("please fill the form")
  }
  else{
   const response = await fetch (`http://localhost:5000/BudgetLists`,{
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body : JSON.stringify(myBudgetText)
    })
    const data = await response.json()
    console.log( data)
    console.log(text)
    setSomeExamples([...someExamples, data])
   }
 // setSomeExamples([...someExamples, {
 // text: textForm,
//  amount: amountForm,
  //} ]
//)
 settextForm("");
 setamountForm("");
 setdateForm("");
setToggler(false)
setwatchToggler(false)
}
  
  return(
  <form className= "AddBudget-wrapper">
     <div className="form-control" >
     <label>Description</label>
     <input type= "text" value={text} placeholder= "Write Text Here" 
     onChange = {(e) => settextForm(e.target.value) }
     />
     </div>
     <div className="form-control" >
     <label>Amount</label>
     <input type= "number"  value={amount} placeholder= "Amount Spent" 
onChange = {(e) => setamountForm(e.target.value) }
     />
     </div>
     
     <DateProps style= {{margin: "10px auto"}} date= {date}
     setdateForm ={setdateForm}/>

     
     <input type = "submit" value = "SAVE" onClick = {submitForm}
     style={{background:"#141E27", 
     width: "100%", border: 0, outline: 0,
     borderRadius:"10px", color: "white",
     height: "2rem",
       fontSize: "1.3rem",
borderTop: "1px solid green",
 borderBottom:"1px solid skyblue",
     }}/> 
     
     </form>
    )
}
export default AddBudget;