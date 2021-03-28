import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleNameChange(event) {
    const newValue = event.target.value; // User typed value
    const inputName = event.target.name; // Which input box user typed in

    
    setFullName((prevValue) => {    
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        }
      } else {
        return {
          fName: prevValue.fName,
          lName: newValue
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleNameChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleNameChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
