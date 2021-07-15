import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import RegistrationPlayer from '../Authentication/RegistrationPlayer';
import RegistrationOrganizer from '../Authentication/RegistrationOrganizer';
import Login from './Organizer_login';


class Landing_Main extends Component {
    render() {
        return (

            // {/* <NavLink to = '/register'>register</NavLink> */}
            // {/* <Switch>
            // <Route path='/register' component={Register}></Route>
            // </Switch> */}
            <div>
                {/* <Route path='/home' component={Home} /> */}
                <Route path='/organizer/register' exact component={RegistrationOrganizer} />
                <Route path='/player/register' exact component={RegistrationPlayer} />
                <Route path='/login' exact component={Login} />
                {/* <Route path='/UserLanding' component={UserLanding}/> */}
            </div>
        )

    }
}
export default Landing_Main;
