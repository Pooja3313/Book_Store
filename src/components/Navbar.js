import React from 'react'
import './Navstyle.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <Link to="#!">Book Store</Link>
    </div>
    <nav>
      <div class="nav-mobile"><Link id="nav-toggle" to="#!"><span></span></Link></div>
      <ul class="nav-list">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Props">Props</Link>
        </li>
        {/* <li>
          <Link to="#!">Services</Link>
         
        </li> */}
        {/* <li>
          <Link to="#!">Pricing</Link>
        </li> */}
        {/* <li>
          <Link to="#!">Portfolio</Link>
         
        </li> */}
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
</section>
    </>
  )
}

export default Navbar
