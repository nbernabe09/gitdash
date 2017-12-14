import React from "react";
import "./RepoViewerDrawer.css";
import { Drawer as DrawerMDL } from 'react-mdl';

import CategoryTabs from "../CategoryTabs";

const RepoViewerDrawer = props =>
  <DrawerMDL className="no-border w-320px">
    <CategoryTabs {...props} />
  </DrawerMDL>

export default RepoViewerDrawer;
