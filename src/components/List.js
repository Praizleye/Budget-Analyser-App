import React, {useEffect} from 'react';
import DateProps  from './DateProps';
import {FaTimes} from 'react-icons/fa';
  const List = ({
    example, 
  someExamples,
  setSomeExamples,
  List,
  remEvent,
  setremEvent
  }) => {
  

const deleteClick = async() => {
  const response = await fetch (`http://localhost:5000/BudgetLists/${example.id}`,
  {
    method: "DELETE",
  })
setSomeExamples(someExamples.filter((el) => el.id !== example.id))
//console.log(example.id)
//console.log(someExamples)
}

  
  return(
  <div className="examplestyle">
<h3>{example.text}</h3>
 <div>{example.amount}</div>
 <FaTimes onClick={deleteClick}
   className = "closeList"
 />
 <div>{example.date} </div>
  </div>
    )
}
export default List;