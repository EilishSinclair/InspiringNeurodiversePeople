import React from 'react'
import { Link } from 'react-router-dom'

function Nav (props) {
  return (
    <div className='DFYouth'>
      <h2 className='content-subhead'>Further Information About Dyscalculia</h2>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/JohnM">John M</Link></li>
      <li><Link to="/LaurenD">Lauren D</Link></li>
      <li><Link to="/HannahH">Hannah H</Link></li>
      <li><Link to="/EilishS">Eilish S</Link></li>
    </div>
  )
}

export default Nav
