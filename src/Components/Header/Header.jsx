import './header.styles.css'
import chas from "../../listadechas/meuarraydechas"

const Header = () => {
return (
    <>
    <div className="div-clientes">

    
    {chas.map(cha =>
    <div className="espacamentodivs" key={cha.id}>
        <h2>{cha.nome}</h2>
        <p>{cha.beneficios}</p>
        <img src ={cha.capa} alt={cha.nome}/>

    </div>
    )}

</div>
    </>
)
}

export default Header 