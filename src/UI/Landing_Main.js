import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, NavLink, Switch } from "react-router-dom";
import RegistrationPlayer from "../Authentication/RegistrationPlayer";
import RegisterOrganizer from "../Authentication/RegisterOrganizer";
import LoginPlayer from "../UI/Player_login";
import Landing from "./Landing/Landing";
import Add_Event from "./Add_Event";
// // import AdminDashboard from './AdminDashboard';
// import sideNav from '../UI/Landing/AdminSideNav'
import AdminSideNav from "./Landing/AdminDashboard";
import AddPlayer from "./TableTennisEvents/AddPlayer";
import C_Events from "./ClientSide/C_Events";
import Org_Login from "../Components/Org_Login";
import PlayerRank from '../UI/Admin/PlayerRanking'
import RankingTableTennis from "./Rankings/TableTennis/RankingTableTennis";
import MenSinglesTiesheet from './TableTennisEvents/MenSinglesTiesheet'
import PrivacyPolicy from "./Static/PrivacyPolicy";

class Landing_Main extends Component {
  render() {
    return (
      // {/* <NavLink to = '/register'>register</NavLink> */}
      // {/* <Switch>
      // <Route path='/register' component={Register}></Route>
      //ssh testing
      // </Switch> */}
      <div>
        {/* <Route path='/home' component={Home} /> */}
        <Route path="/organizer/register" exact component={RegisterOrganizer} />

        <Route path="/player/register" exact component={RegistrationPlayer} />
        <Route path="/organizer/login" exact component={Org_Login} />
        <Route path="/player/login" exact component={LoginPlayer} />
        

        {/* <Route path='/sideNav' exact component={sideNav} /> */}

        <Route path="/" exact component={Landing} />
        {/* <Route path='/sideNav' exact component={sideNav} /> */}

        <Route path="/admin/dashboard" exact component={AdminSideNav} />
        <Route path="/AddEvent" exact component={Add_Event} />
        <Route path="/AddPlayer" exact component={AddPlayer} />
        <Route path="/user/events" exact component={C_Events} />
        <Route path="/playerRank" exact component={PlayerRank} />
        <Route path="/rankings/tabletennis" exact component={RankingTableTennis} />
        <Route path="/menssingles/tie-sheet" exact component={MenSinglesTiesheet} />
        <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
        {/* <Route path='/UserLanding' component={UserLanding}/> */}
      </div>
    );
  }
}
export default Landing_Main;
