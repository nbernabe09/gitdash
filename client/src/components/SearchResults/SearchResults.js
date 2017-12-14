import React  from "react";
import "./SearchResults.css";
import ContainerCard from "../ContainerCard";
import RepoCard from "../RepoCard";
import API from "../../utils/API";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

class SearchResults extends React.Component {
  state = {
    results: [],
    openDialog: false
  }

  componentDidMount() {
    this.performSearch(this.props.type, this.props.term);
  }

  renderCards = res => {
    return res.map(e => <RepoCard key={e.repo_id} repoObj={e} />);
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
    return ( <div>
      <ContainerCard title="Search Results">
        {this.state.results.length !== 0 ? this.renderCards(this.state.results) : null}
      </ContainerCard>
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions>
            <Button type='button'>Agree</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    )
  }
}

export default SearchResults;
