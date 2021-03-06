import React from "react";
import "./Main.css";
import { Content, Grid } from 'react-mdl'

const Main = props =>
  <Content>
    <Grid className={props.className}>
      {props.children}
    </Grid>
  </Content>


export default Main;
