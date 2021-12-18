import Menu from '../../Components/Menu/Menu'
import Image from '../../assets/chazinho2.jpg'
import Footer from '../../Components/Footer/Footer'
import './home.styles.css'

const Home = () => {
return (
<>
    <Menu />
    <div className="texto">
    <h3>Cheirinho de cha! </h3>
    <img src={Image} alt="Cha"/> 
    </div>
    <Footer />
</>
)
}

export default Home