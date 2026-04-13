import React from 'react'
import Header from './components/section1/header'
import Cards from './components/section1/Cards'
import Main from './components/section2/Main'
import {BrowserRouter , Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/section1/Home'
import Profile from './components/section1/Profile'
import Cart from './components/section1/Cart'




const App = () => {

  const img = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/25/af/d6/25afd61d2bd4eda0d7d29abaa8963987.jpg',
      title: 'Golden Maroon',
      price: 50
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/1200x/23/ab/1a/23ab1a73ecd979cfc80406ad13a69c98.jpg',
      title: 'Royal Classic',
      price: 60
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/6d/54/33/6d5433e767c0fb89e074719c70fd1699.jpg',
      title: 'Luxury Gold',
      price: 70
    }
    ,
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/e9/3a/de/e93adeeda5d21198e6bc6a451dd0e24e.jpg',
      title: 'Elegant Card',
      price: 80
    }
     ,
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/a6/ba/99/a6ba99cbe67f59bbae0beaed34ccb4ba.jpg',
      title: 'Elegant Card',
      price: 80
    }
     ,
    {
      id: 6,
      image: 'https://i.pinimg.com/1200x/a9/23/b0/a923b07246f898290fe484bf2df9b7fb.jpg',
      title: 'Elegant Card',
      price: 80
    }
     ,
    {
      id: 7,
      image: 'https://i.pinimg.com/1200x/e9/8c/72/e98c726e4b355be0f5e51c472e4ac9d2.jpg',
      title: 'Elegant Card',
      price: 80
    }
     ,
    {
      id: 8,
      image: 'https://i.pinimg.com/1200x/46/f6/2d/46f62d75552a2b531d5cf1cd68afe679.jpg',
      title: 'Elegant Card',
      price: 80
    }
  ]


  return (
    <div className='bg-gradient-to-tr from-pink-500 via-purple-400 to-blue-300 min-h-screen'>
      <BrowserRouter>
       <Header />

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>

       </Routes>
      </BrowserRouter>
     
     <Cards data={img} />
            <Main />

    </div>
  )
}

export default App