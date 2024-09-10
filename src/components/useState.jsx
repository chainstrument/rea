import { Plus, Search } from 'lucide-react'
import  { useState } from 'react'

const Test = () => {
 
    const [todos, setTodos] = useState({
        todo: "Faire les courses",
        completed: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const todo = formData.get('todo');
        
    
        const newTodo =  {
            todo: todo,
            completed: false,
        }
    
    }


    

  return (
    <div className='flex align-items-left justify-content-center dark'>
        <form onSubmit={(e) => {
            handleSubmit(e);
        }}>
           

                <label className="input input-bordered flex items-center gap-2">
                <input name='todo' type="text" className="grow" placeholder="Search"   />
            
                <button className="btn btn-primary btn-sm btn-outline" type='submit'>    
                    <Plus size={16} />
                </button>
                </label>

        </form>
        
    </div>
  )
}
 


export default Test