import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Inicio from './components/Inicio/Inicio'
import Menu from './components/Menu'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Menu />}>
      <Route path="/" element={<Inicio />} />
    </Route>
  )
)
function App() {

  return (    
    <main className='w-[95%] relative left-[5%]'>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
