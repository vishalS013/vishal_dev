import React from 'react'

const inputField = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showData, setShowData] = useState(false);
    const [color,setcolor]=useState("red")
  
    const changeValue = () => {
  setShowData(!showData)
    };
   const  changeColor =()=>{
   document.body.style.backgroundColor="red" ;
   setcolor("black")
  }
  const changeAnother =()=>{
     document.body.style.backgroundColor="blue" 
  
   }
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="appp"  style={{color}}> hello </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
         
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={changeValue}>Update</button>
        <button onClick={changeColor} onDoubleClick={changeAnother} >changeColor</button>
        <div>
          {showData ? (
            <div>
              <p> {name}</p>
              <p>{password}</p>
            </div>
          ) : (
            null
          )}
        </div>
      </header>




    </div>
  )
}

export default inputField