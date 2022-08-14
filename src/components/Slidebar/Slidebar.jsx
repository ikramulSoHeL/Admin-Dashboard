import React from 'react'
import './Slidebar.css'

import Logo from '../../img/logo.png'

const Slidebar = () => {
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
    </div>
  )
}

export default Slidebar