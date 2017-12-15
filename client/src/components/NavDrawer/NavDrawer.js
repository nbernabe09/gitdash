import React from "react";
import "./NavDrawer.css";
import { Drawer as DrawerMDL, Button, Navigation, Spacer, Icon, Menu, MenuItem } from 'react-mdl';
import API from "../../utils/API";

/* Icon Imports */
import SourceForkIcon          from 'mdi-react/SourceForkIcon';
import EyeIcon                 from 'mdi-react/EyeIcon';
import StarIcon                from 'mdi-react/StarIcon';
import MagnifyIcon             from "mdi-react/MagnifyIcon";
import ContentSaveIcon         from "mdi-react/ContentSaveIcon";
import ArchiveIcon             from "mdi-react/ArchiveIcon";
import HelpCircleIcon          from "mdi-react/HelpCircleIcon";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loggedIn() {
  return getCookie("session") !== "";
}

class NavDrawer extends React.Component {
  state = {
    name: null,
    image: null
  }

  componentWillMount() {
    if(loggedIn()) {
      API.getUserInfo()
         .then(e => {
           this.setState({ name: e.data.login, image: e.data.avatar_url });
         });
    }
  }

  render() {
    return <DrawerMDL className="dash-drawer no-border">
      <header className="dash-drawer-header" role="presentation">
        <div className="icon-row">
          <img src={ this.state.img ? this.state.img : "/images/user.jpg"} alt="user-avatar" className="dash-avatar" />
          <a href="https://www.github.com"><SourceForkIcon className="black-circle" /></a>
          <a href="/"><EyeIcon className="black-circle" /></a>
          <a href="/saved"><StarIcon className="black-circle" /></a>
        </div>
        <div className="dash-avatar-dropdown">
          <span>Welcome, { this.state.name ? this.state.name : "Username" }</span>
          <div className="mdl-layout-spacer" />
          <Button id="accbtn" ripple={true} className="mdl-button--icon">
            <Icon name="arrow_drop_down" className="material-icons" role="presentation" />
            <span className="visuallyhidden">Accounts</span>
          </Button>
        </div>
      </header>
      <Navigation className="dash-navigation">
        <a href="/">
          <MagnifyIcon className="margin-right hover-black" />
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
        <Spacer />
        <a href="https://github.com/ALMaclaine/gitdash">
          <HelpCircleIcon className="help_outline margin-right hover-black" />
          <span className="color-white hover-black">GitHub Repo</span>
        </a>
      </Navigation>
    </DrawerMDL>
  }
}

export default NavDrawer;
