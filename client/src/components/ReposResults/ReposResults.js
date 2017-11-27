import React  from "react";
import "./ReposResults.css";
import SearchResults from "../SearchResults";

const ReposResults = props => 
  <SearchResults term={props.match.params.term} type="repos" />;

export default ReposResults;
