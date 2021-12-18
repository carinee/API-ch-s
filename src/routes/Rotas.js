import { BrowserRouter, Switch, Route} from "react-router-dom"


import Home from "../pages/Home/Home"
import Sobre from "../pages/Sobre/Sobre"
import Contato from "../pages/Contato/Contato"

function Rotas (){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Sobre" component={Sobre}/>
            <Route path="/Contato" component={Contato}/>
        </Switch>
        </BrowserRouter>

    )
}

export default Rotas