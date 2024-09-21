import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Login from './Pages/Login'


function App() {
const router = createBrowserRouter([
{
  path:'/',
  element: <Shop/>
},
{
  path:'/men',
  element:<ShopCategory category='men'/>
},
{
  path:'/women',
  element:<ShopCategory category='women'/>
},
{
  path:'/kids',
  element:<ShopCategory category='kids'/>
},
{
  path:'/product/:id',
  element:<Products/> 
},
{
  path:'/cart',
  element:<Cart/> 
},
{
  path:'/login',
  element:<Login/> 
},
])
  
  return (
    <>
       <Navbar/>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
