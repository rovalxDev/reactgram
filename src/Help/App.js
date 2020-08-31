import React, { Children } from 'react'
import {Switch, Route,Link} from 'react-router-dom';
//Importamos componentes
import Main from './components/Main'
import Content from './components/Tmp/Content'
import ErrorRoute from './components/ErrorRoute';
import Fail from './components/Fail';

class App extends React.Component {
    constructor(props) {
        console.log("Constructor")
        super(props);
    }
    componentDidMount() {
        console.log("Montaje del componente")
    }
    componentDidUpdate(){
        console.log("update");
    }
    render() {
        return (
            <div className="container">
                <div className="row-fluid">
                    <div className="col-md">
                        <h3>Dashboard</h3>
                    </div>
                    <div className="col-md">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/perfil/rovalx">Inicio</Link></li>
                            <li><Link to="/perfil/kriztal/10">Inicio</Link></li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <Route path="/perfil/:username/:posts?" component={Content} exact />
                    <Route path="/redirect" component={Fail} exact/>
                    <Route component={ErrorRoute} />
                </Switch>
            </div>
        )
    }
}
// let App = () => {
//     return (
//             <h3>HOLA TODO BIEN!</h3>
//     )
// }

export default App;