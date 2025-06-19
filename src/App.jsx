import './App.css'
import Panier from './components/panier/Panier'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Fini from './pages/fini/Fini'
import Details from './pages/details/Details'




function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/details'element={<Details/>}/>
            <Route path='/details/fini' element={<Fini/>}/>
          </Route>
      </Routes>

    </>
  )
}

export default App
