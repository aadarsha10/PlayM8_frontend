import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import RegistrationPlayer from '../Authentication/RegistrationPlayer';
import RegistrationOrganizer from '../Authentication/RegistrationOrganizer';
import Login from './Organizer_login';
import PlayerLogin from './Player_login';



class Landing_Main extends Component {
    render() {
        return (

            // {/* <NavLink to = '/register'>register</NavLink> */}
            // {/* <Switch>
            // <Route path='/register' component={Register}></Route>
            // </Switch> */}
            <div>
                { <Route path='/home' component={Landing_Main} />}
                <Route path='/organizer/register' exact component={RegistrationOrganizer} />
                <Route path='/player/register' exact component={RegistrationPlayer} />
                <Route path='/organizer/login' exact component={Login} />
                <Route path='/player/login' exact component={PlayerLogin} />
                {/* <Route path='/UserLanding' component={UserLanding}/> */}
            </div>
        )

    }


}
export default Landing_Main;  
