import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Contato from '../contato/contato'
import Home from '../Home/home'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/contatos' component={Contato} />
        <Redirect from='*' to='/home' />
    </Router>
)