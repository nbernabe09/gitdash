import React  from "react";
import "./CategoryTabs.css";
import { RadioGroup, Radio, Tabs, TabBar, Tab } from 'react-mdl'
import { Redirect } from 'react-router';

class CategoryTabs extends React.Component {
  state = {
    activeTab: 0,
    data: [
      ["Eddard", "Catelyn", "Robb"],
      ["Tywin", "Cersei", "Tyrion"],
      ["Viserys", "ASDASDasd"]
    ]
  }

  componentDidMount() {
    this.setState({ activeTab: 0 });
  }

  setTab = e => {
    this.setState({ activeTab: (e.currentTarget.getAttribute("data-tab-id") - 0) });
  }

  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          <a data-tab-id={0} onClick={e => this.setTab(e)}  className="mdl-tabs__tab is-active">Owner</a>
          <a data-tab-id={1} onClick={e => this.setTab(e)} className="mdl-tabs__tab">Language</a>
          <a data-tab-id={2} onClick={e => this.setTab(e)} className="mdl-tabs__tab">Category</a>
        </div>

        <div className="mdl-tabs__panel is-active">
          <ul>
            { this.state.data[this.state.activeTab].map(e => <li key={e}>{e}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryTabs;
