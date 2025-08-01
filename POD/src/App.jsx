
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Marketing from './components/marketing'
import Shop from './components/shop'
import POD from './components/pod'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Marketing/>,
  }
  ,
  {
    path : '/shop',
    element : <Shop/>,
  }
  ,
  {
    path : '/pod',
    element : <POD/>,
  }
  
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
