import React  from "react";
import "./SearchForm.css";
import ContainerCard from "../ContainerCard"

const SearchForm = props =>
  <ContainerCard title="Search">
  <form action="#" className="pb">
    <div className="mdl-textfield mdl-js-textfield">
      <label className="mdl-textfield__label" htmlFor="Name">Search...</label>
      <input className="mdl-textfield__input" name="searchPhrase" value={props.searchPhrase} onChange={props.inputHandler} pattern="[A-Z,a-z, ]*" type="text" id="Name" />
      <span className="mdl-textfield__error">Letters and spaces only</span>
    </div>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input className="mdl-textfield__input" type="date" name="beginDate" value={props.beginDate} onChange={props.inputHandler} id="Date1" />
      <label className="mdl-textfield__label show-on-foc" htmlFor="Date">Start Date</label>
    </div>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input className="mdl-textfield__input" type="date" name="endDate" value={props.endDate} onChange={props.inputHandler} id="Date2" />
      <label className="mdl-textfield__label show-on-foc" htmlFor="Date">End Date</label>
    </div>
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            type="submit"
            data-upgraded=",MaterialButton,MaterialRipple"
            disabled={!(props.searchPhrase && props.beginDate && props.endDate)}
            onClick={props.submitHandler}
    >
            Submit
      <span className="mdl-button__ripple-container">
        <span className="mdl-ripple"></span>
      </span>
    </button>
  </form>
  </ContainerCard>

export default SearchForm;