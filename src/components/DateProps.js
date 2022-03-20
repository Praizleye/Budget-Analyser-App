const DateProps = () => {

     const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const getdate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  
  
  return(
  
  <div>Date: {getdate}</div>
  
    )
}
export default DateProps;