import React  from "react";
import "./SearchResults.css";
import ContainerCard from "../ContainerCard";
import RepoCard from "../RepoCard";
import API from "../../utils/API";

const renderCards = res => {
  return res.map(e => <RepoCard key={e.repo_id} repoObj={e} />);
}

class SearchResults extends React.Component {
  state = {
    results: []
  }

  componentDidMount() {
    this.performSearch(this.props.type, this.props.term);
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
      this.setState({ results: res.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    return <ContainerCard title="Search Results">
      {this.state.results.length !== 0 ? renderCards(this.state.results) : null}
    </ContainerCard>
  }
}

export default SearchResults;
