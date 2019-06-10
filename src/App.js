import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './routes/home/Home'
import My from './routes/my/My'
import Detail from './routes/detail/Detail'

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/my'} component={My} exact/>
                <Route path={'/detail'} component={Detail} exact/>
            </Switch>
        </Router>
    );
}

export default App;
