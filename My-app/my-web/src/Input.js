import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      {name.firstname} - {name.lastname}
      <br></br>
      <input
        type="text"
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
        value={name.firstname}
        placeholder="Enter name"
      />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
        value={name.lastname}
        placeholder="Enter name"
      />
      <button onClick={(e) => handleSubmit(e)}>submit data</button>
    </div>
  );
};

export default Input;
