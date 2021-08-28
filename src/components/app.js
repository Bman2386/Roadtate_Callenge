import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Menu from './menu/menu';
import Order from './order/order'

export default () =>  (
    <div>
        <Route exact path='/' component={Menu} />
        <Route exact path='/order' component={Order} />  
    </div>
) 


