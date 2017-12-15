import React             from "react";
import "./RepoViewer.css";

import API from "../../utils/API.js";

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import RepoViewerDrawer from "../RepoViewerDrawer";
import RepoViewerHeader from "../RepoViewerHeader";
import Main from "../Main";
import RepoViewerTable from "../RepoViewerTable";

import invertObject from "../../invertObject.js";


const catGen = (data) => Reflect.ownKeys(data).reduce((a, c) => {
    a[`${c}`] = Reflect.ownKeys(data[c]);
    return a;
  }, {});

class RepoViewer extends React.Component {
  state = {
    activeTab: "owners",
    activeSelection: "",
    current_data: [],
    cats: null,
    data: null,
    repos: null
  }

  componentDidMount() {
    this.setState({ activeTab: "owners" });
    API.getCollectionInfo()
       .then(resp => {
         let data = resp.data;
         let cats = catGen(data);
         console.log("CATS/DATA");
         console.log(data);
         console.log(cats);
         this.setState({ data: data });
         let names = cats.owners;
         let proms = names.map(e => API.getUserName(e));
         Promise.all(proms)
           .then(names => {
             names = names.map(e => e.data.login);
             let dat = {
               owners: names,
               languages: cats.languages,
               categories: cats.categories
             }
             this.setState({ cats: dat });
             this.setState({ activeSelection: names[0] })
             data.owner_names = names;
             data.owner_ids = Reflect.ownKeys(data["owners"]);
             let invertCategories = invertObject(data.categories);
             data.vert_cat = invertCategories;
             this.setState({ data: data });
             let currentIds = this.returnData(this.state.activeTab, this.state.activeSelection);
             let proms = currentIds.map(e => API.getRepo(e));
             Promise.all(proms)
               .then(names => {
                 let cur_data = names.map(e => e.data);
                 this.setState({ current_data: cur_data })
               })
               .catch(err => console.log(err))
           })
           .catch(err => console.log(err))
       });
  }

  setTab = e => {
    this.setState({ activeTab: e.currentTarget.getAttribute("data-tab-id") });
  }

  loginToId = login => {
    if(!this.state.data) return;
    if(!this.state.data.owner_names) return;
    if(!this.state.data.owner_names.length === 0) return;
    let index = Array.from(this.state.data.owner_names).indexOf(login);
    if(index === -1) return;
    return this.state.data.owner_ids[index];
    
  }

  returnData = (tab, sel) => {
    if(tab === "owners") {
      let id = this.loginToId(sel);
      return this.state.data.owners[id];
    } else {
      let x = this.state.data[tab][sel];
      return x;
    }
  }

  setSelection = e => {
    let val = e.currentTarget.getAttribute("value");
    this.setState({ activeSelection: val });
    let currentIds = this.returnData(this.state.activeTab, val);
    let proms = currentIds.map(e => API.getRepo(e));
    Promise.all(proms)
           .then(names => {
             let cur_data = names.map(e => e.data);
             this.setState({ current_data: cur_data });
           })
           .catch(err => console.log(err))
  }

  render() {
    return <Layout fixedDrawer={true} fixedHeader={true} className="w-100">
      <RepoViewerHeader />
      <RepoViewerDrawer cats={this.state.cats}
                        activeTab={this.state.activeTab}
                        activeSelection={this.state.activeSelection}
                        setTab={this.setTab}
                        setSelection={this.setSelection} />

      <Main>
        <RepoViewerTable data={this.state.current_data} 
                         cat2repo={this.state.data && this.state.data.vert_cat} />
      </Main>
    </Layout>
  }
}

export default RepoViewer;
