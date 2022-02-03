import React from "react";
const Result = ({ userName, email, password, setView }) => {
  return (
    <div className="results">
      <h1 className="title">Results</h1>
      <div>
        <p>Name : {userName}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <button
          className="edit-button"
          onClick={() => {
            setView("edit");
          }}
        >
          Edit your informations
        </button>
      </div>
    </div>
  );
};

export default Result;
