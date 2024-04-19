import React, { useState } from 'react'

const FormSubmit = () => {
      // form data Submit
      const [name,setName]= useState("")
      const [lname,setLname]= useState("")
      const [interest,setInterest]= useState("")
      const [tnc,setTnc]= useState("")
      const getFormdata =(e)=>{
      console.log(name,lname,tnc,interest)
      e.preventDefault()
      }

      // clearing values onClick
    const cleardata =() =>{
        setName('');
        setLname('');
        setInterest('');
        setTnc(false);

    }
  return (
    <div>
      <h2>Form Submit</h2>
        <form onSubmit={getFormdata}>
    <input type="text" placeholder=" Enter Your Name" value={name} onChange={ (e)=>setName(e.target.value)}/><br></br>
    <input type="text" placeholder=" Enter Your last Name" value={lname} onChange={ (e)=>setLname   (e.target.value)}/><br></br>
    <select>
        <option onChange={ (e)=>setInterest(e.target.value)} value={interest}>select Hobbies</option>
        <option> Reading</option>
        <option> Cooking</option>
        <option> Playing</option>
    </select> <br></br>
    <input type='checkbox' onChange={ (e)=>setTnc(e.target.checked)}></input><span>Accept terms & conditions </span><br></br>
    <button type='submit'>submit Data</button>
    <button type='submit' onClick={cleardata}>Clear Data</button>
</form>
</div>
  )
}

export default FormSubmit