
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Marketing from './components/marketing'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Marketing/>,
    
  }
  
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
