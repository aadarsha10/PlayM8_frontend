import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import './sideNav.css'


export default function SideBarComponent() {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333" className="width">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Navigation
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu >
            <div className="sidebar-menu">
              <NavLink exact to="/admin/dashboard" activeClassName="activeClicked" >
                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              </NavLink>
            </div>
            <div className="sidebar-menu">
              <NavLink exact to="/sideNav" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Table</CDBSidebarMenuItem>
              </NavLink>
            </div>
            <div className="sidebar-menu">
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
            </div>
            <div className="sidebar-menu">
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Analytics
                </CDBSidebarMenuItem>
              </NavLink>
            </div>
            <div className="sidebar-menu">
              <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  Logout
                </CDBSidebarMenuItem>
              </NavLink>
            </div>



          </CDBSidebarMenu>
        </CDBSidebarContent>
        {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
}
