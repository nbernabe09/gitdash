import React from "react";
import "./RepoViewerDrawer.css";
import { Drawer as DrawerMDL, Button, Navigation, Spacer, Icon, Menu, MenuItem } from 'react-mdl';

import CategoryTabs from "../CategoryTabs";

/* Icon Imports */
import SourceForkIcon from 'mdi-react/SourceForkIcon';
import EyeIcon from 'mdi-react/EyeIcon';
import StarIcon from 'mdi-react/StarIcon';
import MagnifyIcon from "mdi-react/MagnifyIcon";
import ContentSaveIcon from "mdi-react/ContentSaveIcon";
import ArchiveIcon from "mdi-react/ArchiveIcon";
import ChartAreaSplineIcon from "mdi-react/ChartAreasplineIcon";
import CommentAlertOutlineIcon from "mdi-react/CommentAlertOutlineIcon";
import HelpCircleIcon from "mdi-react/HelpCircleIcon";

const RepoViewerDrawer = props =>
  <DrawerMDL className="no-border w-320px">
    <CategoryTabs {...props} />
  </DrawerMDL>

export default RepoViewerDrawer;
