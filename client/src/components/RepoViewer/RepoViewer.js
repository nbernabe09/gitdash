import React             from "react";
import { Switch, Route } from "react-router-dom";
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

import PaperclipIcon from 'mdi-react/PaperclipIcon';

let data = { "owners": { "4129662": [47118129, 1424470, 47118129, 1424470], "5923958": [31924247, 44022237, 94958283, 77806473, 45353939, 44022237, 77176702, 35693718, 31558887, 32944229, 31558887, 77806473, 44022237, 32944229, 44022237, 77176702, 45353939, 31924247, 94958283, 35693718], "9950313": [67543905, 67543822, 67543822, 67543905], "16461670": [106358115, 106219016, 107063514, 107824055, 103318172, 110946608, 106139165, 112432199, 105806050, 112062425, 106219016, 110946608, 103318172, 112432199, 105806050, 107824055, 106139165, 106358115, 107063514, 112062425], "28968121": [97144308, 107598007, 103338233, 112902547, 100809249, 94636957, 100809249, 112902547, 94636957, 107598007, 97144308, 103338233], "29104387": [104151087, 94969236, 101191987, 94505621, 103044729, 101191987, 103049913, 103053044, 104130663, 103692376, 104151087, 94505621, 94969236, 104130663, 103692376, 103044729, 103053044, 103049913, 101191987, 101191987] }, "languages": { "C#": [31924247, 31924247], "HTML": [104151087, 94505621, 94958283, 103692376, 105806050, 94636957, 104151087, 94505621, 103692376, 94636957, 105806050, 94958283], "CSS": [94969236, 97144308, 103053044, 100809249, 100809249, 94969236, 103053044, 97144308], "JavaScript": [106358115, 44022237, 106219016, 47118129, 107598007, 103338233, 103044729, 103049913, 107063514, 112902547, 45353939, 1424470, 103318172, 44022237, 110946608, 77176702, 106139165, 35693718, 112432199, 67543905, 104130663, 67543822, 32944229, 112062425, 106219016, 110946608, 104130663, 103044729, 112902547, 47118129, 103318172, 112432199, 107598007, 44022237, 32944229, 44022237, 103049913, 1424470, 77176702, 103338233, 106139165, 45353939, 106358115, 107063514, 67543822, 112062425, 35693718, 67543905], "null": [101191987, 101191987, 107824055, 31558887, 31558887, 107824055, 101191987, 101191987], "Go": [77806473, 77806473] }, "categories": { "Cool": [31924247, 104151087, 94969236, 77806473, 103053044, 107824055, 77176702, 104151087, 94969236, 77806473, 107824055, 103053044, 77176702, 31924247], "Help": [106358115, 44022237, 106219016, 47118129, 101191987, 107063514, 45353939, 1424470, 103318172, 44022237, 106139165, 112432199, 67543905, 104130663, 67543822, 31558887, 112062425, 31558887, 106219016, 104130663, 47118129, 103318172, 112432199, 44022237, 44022237, 1424470, 106139165, 45353939, 106358115, 107063514, 67543822, 101191987, 112062425, 67543905], "Homework": [101191987, 94505621, 94958283, 107598007, 103338233, 103044729, 103049913, 112902547, 100809249, 110946608, 103692376, 105806050, 94636957, 94505621, 100809249, 110946608, 103692376, 103044729, 112902547, 94636957, 105806050, 107598007, 103049913, 101191987, 103338233, 94958283], "Games": [97144308, 35693718, 32944229, 32944229, 97144308, 35693718] } };
let cats = Reflect.ownKeys(data).reduce((a, c) => (a[`${c}`] = Reflect.ownKeys(data[c]), a), {});

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
        this.setState({activeSelection: names[0]})
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
      console.log(x);
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
