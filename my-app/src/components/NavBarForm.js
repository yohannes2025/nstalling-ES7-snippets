import React, { Component } from "react";
import css from "./NavBarForm.module.css"; // Adjust path if necessary
import NavBarChild from "./NavBarChild"; // Adjust path if necessary

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Initially set to false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    this.setState({ isLoggedIn: true }); // Change to logged in state
    // Additional logic can be added to handle the form data
  };

  handleChange = (e) => {
    // Handle form changes if needed
    console.log(e.target.name, e.target.value);
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery Heading</h1>
        {!this.state.isLoggedIn ? (
          <button onClick={this.handleClick}>Log In</button>
        ) : (
          <NavBarChild
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default NavBarForm;
