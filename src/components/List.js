import DateProps  from './DateProps';

import {FaTimes} from 'react-icons/fa'
  const List = ({
    example, 
  someExamples,
  setSomeExamples,
  List
  }) => {
  
const deleteClick = () => {
setSomeExamples(someExamples.filter((el) => el.id !== example.id))
//console.log(example.id)
//console.log(someExamples)

  }
  
  return(
  <div className="examplestyle">
<h3>{example.text}</h3>
 <div>{example.amount}</div>
 <DateProps />
 <FaTimes onClick={deleteClick} 
 className="closeList"
 />
  </div>
    )
}
export default List;