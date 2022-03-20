import React, {useState} from 'react';
import DateProps from './DateProps';

const AddBudget = ({
  someExamples,
    deleteClick,
    setSomeExamples,
    submitForm,
    setdateForm,
    settextForm,
    setamountForm,
    text,
    amount,
  }) => {

  
  return(
  <form>
     <div className="form-control" >
     <label>Budget item </label>
     <input type= "text" value={text} placeholder= "write text here" 
     onChange = {(e) => settextForm(e.target.value) }
     />
     </div>
     <div>
     <label>Amount</label>
     <input type= "number"  value={amount} placeholder= "Amount Spent" 
onChange = {(e) => setamountForm(e.target.value) }
     />
     </div>
     <DateProps />
     <input type = "submit" value = "Save" onClick = {submitForm}/> 
     </form>
    )
}
export default AddBudget;