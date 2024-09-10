import { Ghost, GhostIcon, Rabbit } from 'lucide-react'
import React from 'react'

function Button (props ){
    console.log(props)
    return <button
        style={{color:'red'}}
             className={'btn btn-primary ' + props.className}
             >{props.children}</button>
}

function ShoeCard(props){

    console.log(props)

  if(!props.isNew) {

      return <GhostIcon />;
  }
        
        
    return(
      
        <div className='card bg-neutral text-neutral-content shadow-md'>
            <picture>
                <img 
                className='h-32 w-full object-cover'
                src={props.image} alt="shoe" />
            </picture>
            <div className="card-body">
                <p className="card-title">{props.title}</p>
                <span className="bagde badge badge-primary">new</span>
            </div>
        </div>

    )
}

export default function Components   ()   {
  return <div className='flex flex-col items-start gap-4'>
       <ShoeCard   image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="requin" />
       <ShoeCard isNew  image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="basketball" />
       <ShoeCard isNew image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="tenis" />
  </div>
   
}