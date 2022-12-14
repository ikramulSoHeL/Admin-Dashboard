import React, { useState } from 'react'
import './Slidebar.css'

import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'

import { motion } from "framer-motion";

import { Link } from 'react-router-dom'

const Slidebar = () => {

  const [selected, setSelected] = useState(0)
  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)


  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
        <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
        >
          {/* logo */}
          <div className='logo'>
              <img src={Logo} alt="" />
              <span>
                  Sh<span>o</span>ps
              </span>
          </div>

          {/* menu */}
          <div className='menu'>
            {SidebarData.map((item, index)=>{
              return(
                <div className={selected===index?'menuItem active': 'menuItem'}
                key={index}
                onClick={()=>setSelected(index)}
                >
                  <item.icon />
                  {/* <span>
                    {item.heading}
                  </span> */}
                  <Link className='link' to={item.link}>{item.heading}</Link>
                  
                </div>
              )
            })}

            <div className='menuItem'>
              <UilSignOutAlt />
            </div>

          </div>
      </motion.div>
    </>
  )
}

export default Slidebar