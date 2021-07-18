import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import RegistrationPlayer from '../Authentication/RegistrationPlayer';
import RegistrationOrganizer from '../Authentication/RegistrationOrganizer';
import LoginOrganizer from '../UI/Organizer_login';
import LoginPlayer from '../UI/Player_login';


class Landing_Main extends Component {
    render() {
        return (

            // {/* <NavLink to = '/register'>register</NavLink> */}
            // {/* <Switch>
            // <Route path='/register' component={Register}></Route>
            // </Switch> */}
            <div>
                <Route path='/home' component={Landing} />
                <Route path='/organizer/register' exact component={RegistrationOrganizer} />
                <Route path='/player/register' exact component={RegistrationPlayer} />
                <Route path='/organizer/login' exact component={LoginOrganizer} />
                <Route path='/player/login' exact component={LoginPlayer} />
                {/* <Route path='/UserLanding' component={UserLanding}/> */}
            </div>

        )

    }
}
export default Landing_Main;
