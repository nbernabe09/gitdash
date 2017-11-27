import React  from "react";
import "./SearchForm.css";
import ContainerCard from "../ContainerCard";
import { RadioGroup, Radio } from 'react-mdl'
import { Redirect } from 'react-router';

class SearchForm extends React.Component {
  state = {
    type: "users",
    term: "",
    fireRedirect: false
  }

  handleRadio = event => this.setState({ type: event.target.value });
  handleText  = event => this.setState({ term: event.target.value });
  
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  }

  componentDidMount() {
    this.setState({ fireRedirect: false });
  }
  
  render() {
    const { fireRedirect } = this.state;
    
    return <ContainerCard title="Search Repositories">
      <form action="#" className="pb">
        <div className="mdl-layout-title">Search By</div>
        <RadioGroup onChange={this.handleRadio.bind(this)} className="margin-right margin-top2" name="options" value={this.state.type}>
          <Radio value="users" ripple>Users</Radio>
          <Radio value="orgs" ripple>Organizations</Radio>
          <Radio value="repos">Repos</Radio>
        </RadioGroup>
        <div className="mdl-layout-title margin-top4">Search Term</div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" name="beginDate" value={this.state.term} onChange={this.handleText.bind(this)} id="Date1" />
          <label className="mdl-textfield__label show-on-foc" htmlFor="Date">Enter your search term.</label>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          type="submit"
          data-upgraded=",MaterialButton,MaterialRipple"
        disabled={!(this.state.type && this.state.term)}
        onClick={this.handleSubmit.bind(this)}
        >
          Submit
        <span className="mdl-button__ripple-container">
            <span className="mdl-ripple"></span>
          </span>
        </button>
      </form>
      {fireRedirect && <Redirect to={`/search/${this.state.type}/${this.state.term}`} />}
    </ContainerCard>
  }
}

export default SearchForm;
