import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import RegistrationPlayer from '../Authentication/RegistrationPlayer';
import RegistrationOrganizer from '../Authentication/RegistrationOrganizer';
<<<<<<< HEAD
import LoginOrganizer from '../UI/Organizer_login';
import LoginPlayer from '../UI/Player_login';
=======
import Login from './Organizer_login';
>>>>>>> bce56b5fc55ab8822ed46949b878d61b85619e4a


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
<<<<<<< HEAD
                <Route path='/organizer/login' exact component={LoginOrganizer} />
                <Route path='/player/login' exact component={LoginPlayer} />
=======
                <Route path='/login' exact component={Login} />
>>>>>>> bce56b5fc55ab8822ed46949b878d61b85619e4a
                {/* <Route path='/UserLanding' component={UserLanding}/> */}
            </div>
        )

    }
}
export default Landing_Main;
