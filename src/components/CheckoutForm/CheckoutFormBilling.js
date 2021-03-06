import React, {Component} from "react";
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from "./TextValidator";

class CheckoutFormBilling extends Component {
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
        <h3>Billing</h3>
        <div>
        <label>
          Pick your field country
          <select value={this.props.field_country} onChange={this.props.onChangeField_Country}>
            <option value="US">US</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Singapore">Singapore</option>
          </select>
        </label>  
        </div>
        
        <div>
        <input
          type="text"
          name = "field_address"
          placeholder="Enter your field address"
          value={this.props.field_address}
          onChange={this.props.onChangeField_Address}
        
        />
        </div>
        <div>
        <input
          type="text"
          placeholder="Enter your field state"
          value={this.props.field_state}
          onChange={this.props.onChangeField_State}
        />
        </div>
        <div>
        <input
          type="text"
          placeholder="Enter your field city"
          value={this.props.field_city}
          onChange={this.props.onChangeField_City}
        />
        </div>
        <div>
        <input
          type="text"
          placeholder="Enter your field zipcode"
          value={this.props.field_zip_code}
          onChange={this.props.onChangeField_Zip_Code}
        />
        </div>
        <button>Checkout</button>
      </form>
    );
  }
}

export default CheckoutFormBilling