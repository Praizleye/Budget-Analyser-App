import {NavLink, Routes, Route} from 'react-router-dom'



//importing react-icons
import {FaPlus} from 'react-icons/fa';
import {BiLineChart} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';


const Nav = ({addBtnClick}) =>{
  
  const styledNavLink = ({isActive})=>{
    return {
    opacity: isActive ? 1 : 0.7
    }
  }
  
  
  return(
    
  <div className= "nav">
  
  <NavLink to= "/"
  style = {styledNavLink}>
  <button onClick={addBtnClick} 
    className="Btnstyle"> 
    <FaPlus style = {{fontSize: "1.3rem",
    paddingTop: 5}}/> ADD </button>
</NavLink>

  <NavLink to= "analysis"
  style = {styledNavLink}>
  <button
    className="Btnstyle-Chart"> 
    <BiLineChart style = {{fontSize: "2rem"}}/> 
    </button>
  </NavLink>
  
  <NavLink to = "about"
style = {styledNavLink}>
  <button
  
    className="Btnstyle-About"> 
    <FcAbout style = {{fontSize: "2rem",
   color:"white"}}/>
   </button>
</NavLink>


    
    </div>
    )
}
export default Nav;