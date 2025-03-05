// NavBarForm.js
import React, { Component } from "react";
import css from "./NavBarForm.module.css"; // Adjust path if necessary
import NavBarChild from './NavBarChild'; // Adjust path if necessary

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

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery Heading</h1>
        {!this.state.isLoggedIn ? (
          <button onClick={this.handleClick}>Log In</button>
        ) : (
          <form onSubmit={this.handleClick}>
            <label>
              Username:
              <input type="text" name="username" required />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default NavBarForm;


// Add a method to handle form submission and change state
handleFormSubmit = () => {
    this.setState({ isLoggedIn: false });
    // Additional logic can be added to handle the form data
};

// Update the render method
render() {
    return (
        <div className={css.NavBar}>
            <h1>My Gallery Heading</h1>
            {!this.state.isLoggedIn ? (
                <button onClick={this.handleClick}>Log In</button>
            ) : (
                <NavBarChild handleSubmit={this.handleFormSubmit} />
            )}
        </div>
    );
}
