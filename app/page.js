import Image from 'next/image'
import Section from './componenets/section'
import Slider from './componenets/slider'
import Artical from './componenets/main'
import Footer from './componenets/footer'
import Navbar from './componenets/header'

export default function Home() {
  return (

<>
<Navbar/>
<Section/> 
<Artical/>  
<Slider/>
<Footer/>

</>


)
}
