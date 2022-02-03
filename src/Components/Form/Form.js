import React from "react";

// Components
import Input from "../Input/Input";

const Form = (props) => {
  const {
    handleSubmit,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    passwordError,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">Create account</h1>

      <Input
        label={"Name"}
        type={"text"}
        placeholder={"User name"}
        value={userName}
        setInput={setUserName}
      />
      <Input
        label={"Email"}
        type={"email"}
        placeholder={"email"}
        value={email}
        setInput={setEmail}
      />

      <Input
        label={"Password"}
        type={"password"}
        placeholder={"password"}
        value={password}
        className={passwordError && "error"}
        setInput={setPassword}
      />

      <Input
        label={"Confirm your Password"}
        type={"password"}
        placeholder={"password"}
        value={passwordConfirm}
        className={passwordError && "error"}
        setInput={setPasswordConfirm}
      />

      {passwordError && (
        <p className="error-msg">Les mots de passe ne sont pas identiques</p>
      )}

      <input type="submit" value="Register" className="submit-button" />
    </form>
  );
};

export default Form;
