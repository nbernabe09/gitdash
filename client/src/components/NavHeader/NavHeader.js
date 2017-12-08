import React from "react";
import "./NavHeader.css";
import logo from './gitdash_logo.png'
import { Header as HeaderMDL, IconButton, Menu, MenuItem, HeaderRow,
         Textfield } from 'react-mdl'

const NavHeader = props =>
  <HeaderMDL>
    <HeaderRow className="dash-header">
      <span className="mdl-layout-title">Search</span>
      <img className="logo" alt="gitdash-logo" src={logo} />
      <div>
        <Textfield 
          expandable={true} 
          expandableIcon="search"
          className="mdl-textfield--expandable"
          label="Enter your query..."
        >
        </Textfield>
        <IconButton name="more_vert" ripple={true} id="hdrbtn" />
        <Menu valign="bottom" align="right" target="hdrbtn">
          <MenuItem>
            <a href="https://lifesizehuman.github.io/gitland/">
              About
            </a>
          </MenuItem>
          {/* <MenuItem>Contact</MenuItem>
          <MenuItem>Legal information</MenuItem> */}
        </Menu>
      </div>
    </HeaderRow>
  </HeaderMDL>

export default NavHeader;
