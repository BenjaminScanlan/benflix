import React, { useEffect, useState } from 'react'
import "./nav.css"

function Nav() {
    const [show, handeShow] = useState( false);

    const transitionNavbar = () => {
      if (window.scrollY > 100) {
        handeShow(true);
      } else {
        handeShow(false);
      }
    };
  
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [])

    return <div className={`nav ${show && 'nav_black'}`} >
        <div className="nav_content">
            <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png?20170904093427' alt='' />
            <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' /></div>
    </div>
}

export default Nav