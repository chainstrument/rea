import { Ghost, GhostIcon, Rabbit } from 'lucide-react'
import React from 'react'

function Button (props ){
    console.log(props)
    return <button
        style={{color:'red'}}
             className={'btn btn-primary ' + props.className}
             >{props.children}</button>
}

function Badge({ isNew}){
    {if (isNew){
        return <span className="badge badge-primary">new</span>
    }}

    return;
}

function ShoeCard(props){

    console.log(props)
 
        
    return(
      
        <div className='card bg-neutral text-neutral-content shadow-md'>
            <picture>
                <img 
                className='h-32 w-full object-cover'
                src={props.image} alt="shoe" />
            </picture>
            <div className="card-body">
                <p className="card-title">{props.title}</p>
                {Boolean(props.isNew) && <div className="badge badge-primary">new</div> } 
                
            </div>
        </div>

    )
}

const SHOES = [{
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "requin",
    isNew: true,
    id: 1,
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "basketball",
    isNew: false,
    id: 2,
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "tenis",
    isNew: true,
    id: 3,
  }]

export default function Components   ()   {
  return <div className='flex flex-col items-start gap-4'>
        {SHOES.map((shoe) =>  (
           <ShoeCard key={shoe.id} {...shoe} />
        ))}
       

       <ShoeCard    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="requin" />
       <ShoeCard isNew  image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="basketball" />
       <ShoeCard isNew image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="tenis" />
  </div>
   
}