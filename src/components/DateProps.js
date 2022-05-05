import React, {useState, useEffect} from 'react';
const DateProps = ( {date, setdateForm}) => {
// getting the date 

     const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// displaying the datecv vb
    
      const dated = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    
  return(
  
  <div>
   <div className="form-control" >
     <label>Date</label>
     <input type= "date"  value={date} placeholder= "Amount Spent" 
onChange = {(e) => setdateForm(e.target.value) }
     />
     
     </div>
  </div>
  
    )
}
export default DateProps;