import React, {Component} from "react";
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from "./TextValidator";

class CheckoutFormShipping extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        <h3>Shipping</h3>
        <div>
        <label>
          Pick the field owner type
          <select value={this.props.field_owner_type} onChange={this.props.onChangeField_Owner_Type}>
            <option value="Corporate">Corporate</option>
            <option value="Educational">Educational</option>
            <option value="Government use">Governmet use</option>
            <option value="Investor">Investor</option>
            <option value="Non-profit">Non-profit</option>
            <option value="Religious">Religious</option>
          </select>
        </label>
        </div>

        <div>
        <label>
          Pick the field project type
          <select value={this.props.field_project_type} onChange={this.props.onChangeField_Project_Type}>
            <option value="buildings">Buildings</option>
            <option value="cities">Cities</option>
            <option value="communities">Communities</option>
          </select>
        </label>
        
        </div>
        <div>
          <label>
          Pick the field rating system
          <select value={this.props.field_rating_system} onChange={this.props.onChangeField_Rating_System}>
            <option value="LEED">LEED</option>
            <option value="Parksmart">Parksmart</option>
            <option value="Other">Other</option>
            <option value="None">None</option>
          </select>
        </label>
        
        </div>
        <div>
        <label>
          Pick the field space type
          <select value={this.props.field_space_type} onChange={this.props.onChangeField_Space_Type}>
            <option value="Airport">Airport</option>
            <option value="Circulation Space">Circulation Space</option>
            <option value="Data Center">Data Center</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </label>
        
        </div>
        <div>
        <label>
          Pick the field unit type
          <select value={this.props.field_unit_type} onChange={this.props.onChangeField_Unit_Type}>
            <option value="IP">IP</option>
            <option value="SI">SI</option>
          </select>
        </label>   
        
        </div>
        
        
        <button>Next</button>
      </form>
    );
  }
}

export default CheckoutFormShipping;