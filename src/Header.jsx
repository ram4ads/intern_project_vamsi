import React from 'react'

const Header = () => {
  return (
    <div>
         <nav>
        <img className='logo' alt="logo" src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg" />
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/login"><li>Login</li></a>
        </ul>
       </nav>
    </div>
  )
}

export default Header