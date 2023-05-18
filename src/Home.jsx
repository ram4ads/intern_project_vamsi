import React, {useState} from 'react'
import Header from './Header'

const Home = () => {

    const [number, setNumber] = (0)

  return (
    <div>
      <Header />
      <div className='body'>
        <h1>Welcome to Home Page</h1>
        <button type="button" onClick={(prev) => setNumber(number +1 )}>add</button>
      </div>
    </div>
  )
}

export default Home