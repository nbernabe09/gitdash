import React  from "react";
import "./UsersResults.css";
import SearchResults from "../SearchResults";

const UsersResults = (props) => 
  <SearchResults term={props.match.params.term} {...props} type="users" />;

export default UsersResults;
