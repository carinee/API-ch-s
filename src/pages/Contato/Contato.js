import { TiSocialGithub, TiSocialLinkedin} from 'react-icons/ti'

import Menu from '../../Components/Menu/Menu'

import Footer from '../../Components/Footer/Footer'
import ImageAbout from '../../assets/carinee.jpg'
import './contato.styles.css'

const Contato = () => {
 return (
   <>
    <Menu />
    

    <div className='main'>
      <div>
        {/* <p className="paragráfo">Quem é Carine?</p> */}
        <img src={ImageAbout} alt="Carine" />
        <h2>Carine Oliveira</h2>
        <p>Desenvolvedora Front-end Jr e UIUX Designer Jr.</p>
        {/* <p>Baiana, Pisciana, ama gatos, fâ de animes e tudo que seja novo, ama conhcer pessoas e a Natureza.</p> */}
        <p>Baiana, Pisciana, ama gatos, fã de animes e tudo que seja novo, amo conhecer pessoas e a Natureza.</p>
        <p>Sou filha de uma baiana com um maranhense, tenho três irmãos, nasci na Bahia, em uma zona rural e moro em São Paulo atualmente. 
          Sempre fui uma garota curiosa, já quis ser de tudo nessa vida, e agora curiosa e encontada pela área de UXUI Design.
        </p>

        <p>Tento ser minha melhor versão sempre, Melhor do que ontem mas nunca melhor que ninguém! </p>
      </div>
    </div>




    <div className="redes-sociais">
      <p className="siga">Siga-me nas redes sociais:</p>
      <p>carineaparecida54@gmail.com</p>
      <div>
        <a href="https://github.com/carinee" target="_blank" rel="noreferrer">
          <TiSocialGithub size={90} color="rgb(56, 56, 56)"/>
        </a>
        <a href="https://www.linkedin.com/in/carine-oliveira-15a573197/" target="_blank" rel="noreferrer">
          <TiSocialLinkedin size={90} color="rgb(56, 56, 56)"/>
        </a>
      </div>
    </div>
    <Footer />
  </>
 )
}

export default Contato