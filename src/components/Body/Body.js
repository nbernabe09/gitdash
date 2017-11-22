import React from "react";
import "./Body.css";
import { Layout } from 'react-mdl'
import Header from "../Header";
import Drawer from "../Drawer";
import Main from "../Main";
import SearchForm from "../SearchForm";

const Body = props =>
  <Layout fixedDrawer={true} className="dash-layout">
    <Header />
    <Drawer />
    <Main>
      <SearchForm />
    </Main>
  </Layout>

export default Body;
