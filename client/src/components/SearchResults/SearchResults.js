import React  from "react";
import "./SearchResults.css";
import ContainerCard from "../ContainerCard";
import RepoCard from "../RepoCard";
import API from "../../utils/API";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

class SearchResults extends React.Component {
  state = {
    results: [],
    openDialog: false,
    currentSelection: {},
    currentCategory: null
  }

  componentDidMount() {
    this.performSearch(this.props.type, this.props.term);
  }

  triggerModal(obj) {
    this.setState({ currentSelection: obj });
    console.log(this.state.currentSelection);
    console.log(this.state.currentCategory);
    this.handleOpenDialog();
  }

  renderCards = (res, handle) => {
    return res.map(e => <RepoCard key={e.repo_id} repoObj={e} handle={handle} />);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  handleText = event => this.setState({ currentCategory: event.target.value });

  performSearch = (type, term) => {
    let promise;
    if (type === "users") {
      promise = API.searchUsers(term);
    } else if (type === "orgs") {
      promise = API.searchOrgs(term);
    } else {
      promise = API.searchRepos(term);
    }

    promise.then(res => {
      this.setState({ results: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    return ( <ContainerCard title="Search Results">
        {this.state.results.length !== 0 ? this.renderCards(this.state.results, this.triggerModal.bind(this)) : null}
      <div>
        <Button colored onClick={this.handleOpenDialog.bind(this)} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Save Repo</DialogTitle>
          <DialogContent>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" name="beginDate" value={this.state.term} onChange={this.handleText.bind(this)} id="Date1" />
              <label className="mdl-textfield__label show-on-foc" htmlFor="Date">Category</label>
            </div>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog.bind(this)}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      </ContainerCard>
    )
  }
}

export default SearchResults;
