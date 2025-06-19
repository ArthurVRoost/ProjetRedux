import './App.css'
import Panier from './components/panier/Panier'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'

function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>

          </Route>

      </Routes>
      
    </>
  )
}

export default App
