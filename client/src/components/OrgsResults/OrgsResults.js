import React  from "react";
import "./OrgsResults.css";
import SearchResults from "../SearchResults";

const OrgsResults = props =>
  <SearchResults term={props.match.params.term} type="orgs" />;

export default OrgsResults;
