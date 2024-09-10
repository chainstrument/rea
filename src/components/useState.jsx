import { Plus, Search } from 'lucide-react'
import  { useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(10)

    const [todo, setTodo] = useState('')

    const handleClick = () => {
        console.log('clicked')
        setCount(count + 10)
    }
  return (
    <div className='flex align-items-left justify-content-center'>
        <button id="test_id" onClick={handleClick} className='btn btn-primary'>Click me</button>
        {count}

        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" onChange={(e) => setTodo(e.target.value)} />
        <Plus />
        </label>
        <p className='flex '>Todo : {todo}</p>
    </div>
  )
}
 


export default Test