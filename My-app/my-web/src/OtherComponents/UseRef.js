import React, { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null); 
    const ourRef = useRef(0);
  const getValue = () => {
    console.log(inputRef.current.value );
    // inputRef.current.value ="1000" ;
    inputRef.current.style.color ="red" ;
  };
  return (
    <div>
      <h1>Ref in react</h1>
      <input type="text" ref={inputRef}  />

      <button onClick={() => getValue()}>Check ref value</button>

      <h1>{ourRef.current}</h1>
      <button onClick={() => (ourRef.current = ourRef.current + 1)}>
        Increment
      </button>
    </div>
  );
};

export default UseRef;
