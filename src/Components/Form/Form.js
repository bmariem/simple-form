import React from "react";
const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1 className="title">Create account</h1>
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        value={props.userName}
        onChange={(event) => {
          props.setUserName(event.target.value);
        }}
        required
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="email"
        value={props.email}
        onChange={(event) => {
          props.setEmail(event.target.value);
        }}
        required
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        value={props.password}
        className={props.passwordError && "error"}
        onChange={(event) => {
          props.setPassword(event.target.value);
        }}
        required
      />

      <label>Confirm your Password</label>
      <input
        type="password"
        placeholder="password"
        value={props.passwordConfirm}
        className={props.passwordError && "error"}
        onChange={(event) => {
          props.setPasswordConfirm(event.target.value);
        }}
        required
      />
      {props.passwordError && (
        <p className="error-msg">Les mots de passe ne sont pas identiques</p>
      )}

      <input type="submit" value="Register" className="submit-button" />
    </form>
  );
};

export default Form;
