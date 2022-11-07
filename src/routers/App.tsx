import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'*',
    element: <span>Not Found</span>
  }
])

function App() {

  return (
    <RouterProvider router={router} / >
  )
}

export default App
