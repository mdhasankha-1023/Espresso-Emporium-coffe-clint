import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './pages/Coffee'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div>
      <h1 className='text-center'>Best Coffees Collections</h1>
      <div className='grid grid-cols-2 gap-8 px-16 py-8 mt-8'>
        {
          coffees.map(coffee => <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></Coffee>)
        }
      </div>
      <Link to='/add-new-coffee'><button>Add new coffee</button></Link>
    </div>
  )
}

export default App
