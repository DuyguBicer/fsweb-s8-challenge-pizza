import './App.css'
import logo from '../images/iteration-1-images/logo.svg'
import banner from '../images/iteration-1-images/home-banner.png'
import basil from '../images/iteration-2-images/basil.png'
import chili from '../images/iteration-2-images/chili.png'
import garlic from '../images/iteration-2-images/garlic.png'
import mushroom from '../images/iteration-2-images/mushroom.png'
import pattern from '../images/iteration-2-images/pattern.png'
import pizza from '../images/iteration-2-images/pizza.png'

function App() {
  return (
    <div className="container">
      <h1 className="logo">Teknolojik Yemekler</h1>
      <h2 className="title">KOD AÇIKTIRIR<br/>PİZZA, DOYURUR</h2>
      <a href="#" className="btn">AÇIKTIM</a>
      
      <img src={banner} alt="Pizza Banner" className="banner-img" />
      
      <img src={pattern} alt="" className="background-pattern" />
    </div>
  )
}

export default App
