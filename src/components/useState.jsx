import React from 'react'

const Test = () => {

const handleClick = () => {
    console.log('clicked')
}
  return (
    <div className='flex align-items-left justify-content-center'>
        <button id="test_id" onClick={handleClick} className='btn btn-primary'>Click me</button>
        
    </div>
  )
}

export default Test