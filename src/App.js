import React, { Children } from 'react'
import {Switch, Route,Link} from 'react-router-dom';
//Importamos componentes
import Main from './Main'
import Content from './Content'
import ErrorRoute from './ErrorRoute';
import Extra from './Extra';


let App = () => {
    return (
        <>
        <Link to="/">Inicio</Link>
        <Link to="/Extra">Extra</Link>
        <Link to="/tag/reactjs">Content tag</Link>
        <Link to="/perfil/rovalx">Perfil</Link>
            <Switch>
                    <Route path="/perfil/:username" component={Content}  type="perfil" exact/>
                    <Route path="/tag/:hashtag" component={Content} type="tag" exact />
                    <Route path="/extra" component={Extra} exact/>
                    <Route path="/"  exact>
                            <Main />
                    </Route>                        
                    <Route component={ErrorRoute} />
            </Switch>
        </>
    )
}

export default App;