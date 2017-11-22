import React  from "react";
import "./SearchForm.css";
import ContainerCard from "../ContainerCard"
import { SelectField, Option } from 'react-mdl-selectfield';

const SearchForm = props =>
  <ContainerCard title="Search">
  <form action="#" className="pb">
    <SelectField label={'Select me'} value={3}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
      <Option value={4}>Four</Option>
      <Option value={5}>Five</Option>
    </SelectField>
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