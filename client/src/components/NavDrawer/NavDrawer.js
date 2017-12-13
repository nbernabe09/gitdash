import React from "react";
import "./NavDrawer.css";
import { Drawer as DrawerMDL, Button, Navigation, Spacer, Icon, Menu, MenuItem } from 'react-mdl';

/* Icon Imports */
import SourceForkIcon          from 'mdi-react/SourceForkIcon';
import EyeIcon                 from 'mdi-react/EyeIcon';
import StarIcon                from 'mdi-react/StarIcon';
import MagnifyIcon             from "mdi-react/MagnifyIcon";
import ContentSaveIcon         from "mdi-react/ContentSaveIcon";
import ArchiveIcon             from "mdi-react/ArchiveIcon";
import ChartAreaSplineIcon     from "mdi-react/ChartAreasplineIcon";
import CommentAlertOutlineIcon from "mdi-react/CommentAlertOutlineIcon";
import HelpCircleIcon          from "mdi-react/HelpCircleIcon";

const NavDrawer = props =>
  <DrawerMDL className="dash-drawer no-border">
    <header className="dash-drawer-header" role="presentation">
      <div className="icon-row">
        <img src="/images/user.jpg" alt="user-avatar" className="dash-avatar" />
        <a href="https://www.github.com" target="_blank"><SourceForkIcon className="black-circle" /></a>
        <a href="/"><EyeIcon className="black-circle" /></a>
        <a href="/saved"><StarIcon className="black-circle" /></a>
      </div>
        <div className="dash-avatar-dropdown">
          <span>Welcome, Username</span>
          <div className="mdl-layout-spacer" />
          <Button id="accbtn" ripple={true} className="mdl-button--icon">
              <Icon name="arrow_drop_down" className="material-icons" role="presentation" />
              <span className="visuallyhidden">Accounts</span>
          </Button>
          <Menu valign="bottom" ripple={true} align="right" target="accbtn">
            <MenuItem>hello@example.com</MenuItem>
            <MenuItem>info@example.com</MenuItem>
            <MenuItem>
              <Icon name="add" />
              Add another account...
            </MenuItem>
          </Menu>
      </div>
    </header>
    <Navigation className="dash-navigation">
        <a href="/">
          <MagnifyIcon className="margin-right hover-black"/>
          <span className="color-white hover-black">Search</span>
        </a>
        <a href="/saved">
          <ContentSaveIcon className="margin-right hover-black" />
          <span className="color-white hover-black">Saved</span>
        </a>
        <a href="">
          <ArchiveIcon className="margin-right hover-black" />
          <span className="color-white hover-black">My Repos</span>
        </a>
        {/* <a href="">
          <ChartAreaSplineIcon className="margin-right hover-black" />
          <span className="color-white hover-black">Stats</span>
        </a>
        <a href="">
          <CommentAlertOutlineIcon className="margin-right hover-black" />
          <span className="color-white hover-black">Notifications</span>
        </a> */}
        <Spacer />
        <a href="https://github.com/ALMaclaine/gitdash" target="_blank">
          <HelpCircleIcon className="help_outline margin-right hover-black" />
          <span className="color-white hover-black">GitHub Repo</span>
        </a>
    </Navigation>
  </DrawerMDL>

export default NavDrawer;
