import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLNameChange(event) {
    setLastName(event.target.value);
  }
  
  function handleClick() {
    setFirstName();
  }

  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form>
        <input
          name="fName"
          onChange={handleFNameChange}
          placeholder="First Name"
          value={firstName}
        />
        <input
          name="lName"
          onChange={handleLNameChange}
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
