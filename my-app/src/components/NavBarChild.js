import React from "react";

const NavBarChild = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} required />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NavBarChild;
