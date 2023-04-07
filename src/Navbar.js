import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <>
    <aside>
    <p> Navbar </p>
    <Link to='/Home'>
      Home
    </Link>
    <Link to='/About' >
      About
    </Link>
    {/* <Link to='/Account'>
      Account
    </Link> */}
    <Link to='/Contact'>
      Contact
    </Link>
    {/* <Link to='/Dashboard'>     
      Dashboard
      <i className='fas fa-caret-down'></i>
    </Link>
    <div className='dropdown_menu'>
      <ul className='dropdown'>
        <li><Link to='/Setting'>Setting</Link></li>
        <li><Link to='/NotFound'>NotFound</Link></li>
        <li><Link to='/Account'>Account</Link></li>
     </ul>
    </div>
    */}

    <Link to='/Dashboard'>
      Dashboard
    </Link><Link to='/Account'>
      Account
    </Link>
    
    
    <Link to='/Setting' >
      <i className="fa fa-trash-o" aria-hidden="true"></i>
      Setting
    </Link>
    <Link to='/NotFound' >
      <i className="fa fa-trash-o" aria-hidden="true"></i>
       NotFound
    </Link>
  </aside>
        </>
    )
}
