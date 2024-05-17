import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='header'>
      <div class="logo">
            <div class="logo-text"
                style={{margin: "5px", fontFamily:"'Franklin Gothic Medium , Arial Narrow , Arial, sans-serif"}}
                >Online Studio</div>
            <div class="search-bar">
                <input type="text" placeholder="Enter your mall..."/>
                <button style={{backgroundColor:"black"}}>Go</button>
            </div>
            <div></div>
        </div>

        <nav>
            <div class="toggle">
                <button style={{backgroundColor:"gray"}}>Home</button>
                <button>Template</button>
                <button>Video</button>
                <button>Blog</button>
                <button>Demo Link</button>
                <button>Contact</button>
                <button>About</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
