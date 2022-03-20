import List from './List';

  const Lists = ({
    text,
  someExamples,
    deleteClick,
    setSomeExamples,
  }) => {
    
  return(
  <div className="ListsContainer">
 { someExamples.map((example) => 
  (<List 
  key = {example.id}
  example = {example}
  someExamples = {someExamples}
  setSomeExamples = {setSomeExamples}
  />))
 }
    </div>
    )
}
export default Lists;