import React from 'react'
import "../Css/Header.css"
import logo from "../Images/Mask Group.svg"
// import "../App.css"
function Header() {
    return (
       <>
         <nav>
          <div className='nav__Containers'>
          <div className='nav__logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='nav__Container flex__box'>
           <ul className='flex__box'>
             <li>HOME</li>
             <li>ABOUT US</li>
             <li>FOR PROVIDERS</li>
           </ul>
           <div className="nav__buttons">
             <button className='nav__button' >LOGIN</button>    
           </div>
           </div>
          </div>

         </nav>
       </>
    )
}

export default Header
