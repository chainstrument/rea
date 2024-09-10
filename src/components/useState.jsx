import React from 'react'

const Test = () => {

const handleClick = () => {
    console.log('clicked')
}
  return (
    <div className='flex align-items-left justify-content-center'>
        <button id="test_id" onClick={handleClick} className='btn btn-primary'>Click me</button>
        <Todo onDelete={() => console.log('App deleted')} />
    </div>
  )
}

const Todo = (props) => {
    return (
        <div className="flex items-center gap-4">
            <p>Faire ses courses</p>
            <button 
                onClick={() => {
                    console.log('deleted')
                    props.onDelete?.();
                }}
                className='btn btn-error btn-sm'>X</button>
        </div>
    )
}


export default Test