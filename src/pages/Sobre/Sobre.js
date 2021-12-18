import Menu from '../../Components/Menu/Menu'
import Header from '../../Components/Header/Header'
import ImageAbout from '../../assets/chazinho4.jpg'
import Footer from '../../Components/Footer/Footer'
//import chas from "../../listadechas/meuarraydechas.js"


import './sobre.styles.css'
const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageAbout}>Meus chazinhos :) </Header>
    {/* <div className='main'>
      <img src="https://blogueiraju.files.wordpress.com/2015/05/xicara-de-cha-transparente.jpg" alt="chazinho" />
    </div> */}
    <Footer />
  </>
 )
}

export default Sobre 