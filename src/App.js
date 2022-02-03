import React, { useState } from "react";

// Components
import Form from "./Components/Form/Form";
import Result from "./Components/Result/Result";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  // ETATS
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [view, setView] = useState("edit");

  // FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setPasswordError(true);
    } else {
      setView("result");
    }
  };

  return (
    <div className="App">
      <div className="container">
        {view === "edit" ? (
          <Form
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordConfirm={passwordConfirm}
            setPasswordConfirm={setPasswordConfirm}
            passwordError={passwordError}
            handleSubmit={handleSubmit}
          />
        ) : null}
        {view === "result" ? (
          <Result
            userName={userName}
            email={email}
            password={password}
            setView={setView}
          />
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default App;
