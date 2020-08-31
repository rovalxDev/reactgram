import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Main from '../components/Main';
import Media from '../components/Media';
import NotFound from './NotFound';

const Rutas = () => {
    return (
        
        <Switch>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path={["/profile/:name","/hashtag/:name"]}>
                <Media />
            </Route>
            <Route component={NotFound}>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Rutas;