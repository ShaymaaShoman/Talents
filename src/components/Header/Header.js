import React from 'react'
import './Header.css'

const Header = ( )=>{
    
  return (
    <div className='Card-wrapp'>
    <div>
    <h6>Email Address</h6>
    <p>mail@email.com <span style={{
      color:' red'}}>(not verified)</span></p>
    </div>
    
    <div className='btn-verife'>
    <button>Verify</button>
    </div>
    
    </div>
  )
}

export default Header;
