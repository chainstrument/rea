import { Rabbit } from 'lucide-react'
import React from 'react'

function Button (props ){
    console.log(props)
    return <button className={'btn btn-primary ' + props.className}>{props.children}</button>
}

export default function Components   ()   {
  return <div className='flex flex-col items-start gap-4'>
        <Button className="btn-xl" >
            <Rabbit size={24} />
            Le btn</Button>
  
  </div>
   
}