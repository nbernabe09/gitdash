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

  addRepo() {
    let returnObj = {
      language: this.state.currentSelection.language,
      category: this.state.currentCategory,
      repo_id:  this.state.currentSelection.repo_id,
      github_id: this.state.currentSelection.owner_id
    }
    API.addCatNode(returnObj);
    this.handleCloseDialog();
    this.setState({ currentCategory: null });
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
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Save Repo</DialogTitle>
          <DialogContent>
            <h2>Category</h2>
            <div style={{width: "180px" }} className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input style={{ width: "180px" }} className="mdl-textfield__input" type="text" name="beginDate" value={this.state.currentCategory} onChange={this.handleText.bind(this)} id="Date1" />
            </div>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.addRepo.bind(this)}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      </ContainerCard>
    )
  }
}

export default SearchResults;
