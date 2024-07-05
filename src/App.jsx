
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Data from './pages/Data'
import Buy from './pages/Buy'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route path='/' element = {<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/services' element = {<Services/>}/>
       <Route path='/data' element = {<Data/>}/>
       <Route path='/buy' element = {<Buy/>}/>
       
       
       
       </Route>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={route}/>

    </>
  )
}

export default App
