import React  from "react";
import "./Results.css";
import UsersResults from "../UsersResults";
import OrgsResults  from "../OrgsResults";
import ReposResults from "../ReposResults";
import { Switch, Route } from "react-router-dom";

const Results = () => (
    <Switch>
      <Route exact path="/search" render={() => <p>Invalid Search</p>} />
      <Route path='/search/users/:term' component={UsersResults}/>
      <Route path='/search/orgs/:term'  component={OrgsResults} />
      <Route path='/search/repos/:term' component={ReposResults} />
    </Switch>
)

export default Results;
