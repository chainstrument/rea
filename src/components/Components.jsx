import React from 'react'

function Button (props ){
    console.log(props)
    return <button className='btn btn-primary'>{props.name}</button>
}

export default function Components   ()   {
  return <div className='flex flex-col items-start gap-4'>
        <Button name={"Bonjour"}/>
  
  </div>
   
}