import React, { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    county: "",
  });
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo(function (prevInfo) {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    const fName = userInfo.fName;
    const lName = userInfo.lName;
    const county = userInfo.county;
    if (fName && lName && county) {
      setFullName(fName + " " + lName);
    } else {
      alert("Please fill out all fields.");
    }
  }

  return (
    <div className="container">
      <h1>Welcome</h1>
      <input
        type="text"
        placeholder="First Name"
        name="fName"
        value={userInfo.fName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lName"
        value={userInfo.lName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Your County"
        name="county"
        value={userInfo.county}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {fullName && userInfo.county ? (
        <h1>
          Welcome Back Mr. {fullName} from {userInfo.county} county.
        </h1>
      ) : null}
    </div>
  );
}

export default App;
