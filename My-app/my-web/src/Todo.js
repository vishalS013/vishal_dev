import React, { useState } from "react";
import "./Todo.css";
import Modal from "./Modal";

const Todo = () => {
  //getting value of input field here
  const [data, setData] = useState([{
    title: "",
    description: "",
  }]);

  //setting index values initially undefined
  const [isEdit, setEdit] = useState(undefined);

  //storing all the input data in submit data state
  const [submitData, setSubmitData] = useState([]);

  //for that user can can write values in input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log("storing values in input field");
  };

  // add todo in ui by this and storing previous data in updated state
  const handleClick = () => {
    setSubmitData([...submitData, data]);
    setData({ title: "", description: "",number:"" });
    console.log("Add todo in ui working");
  };
  
  //for saving edited values which we get from input field
  const handleEdit = () => {
  // taking new variable to store previopus values in it
    const updatedData = [...submitData];

    updatedData[isEdit] = {
      title: data.title,
      description: data.description,
      number:data.number,
    };
    console.log("check -=-=--", updatedData);
    //storing updated values in previous data or array
    setSubmitData(updatedData);
    // Reset edit mode
    setEdit(undefined);
    // Reset form fields
    setData({ title: "", description: "", number:"" });
  };

  // delete values from index number 
  const handleDelete = (index) => {
    let newData = [...submitData];
    newData.splice(index, 1);
    setSubmitData(newData);
  };
  
  // const handleDelete = (index) => {
  //   const updatedData = submitData.filter((item, ind) => ind !== index);
  //   setSubmitData(updatedData);
  // };

  const onEdit = (index) => {
    const selectedTodo = submitData[index];

    // Set the data to be edited
    setData({
      title: selectedTodo.title,
      description: selectedTodo.description,
      number:selectedTodo.number
    });

    // Set the edit mode to true to display the modal in edit mode
    setEdit(index);
  };


  return (
    <>
   
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{marginLeft:"500px",margin:"20px"}}
      >
        Add lists in field
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">

{/* this condition is used to change only text of modal box */}
                {isEdit !== undefined ? "Edit Todo" : "Add Todo"}

              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>



            <div className="modal-body">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Add Title"
                style={{width:"170px"}}

              />
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
                placeholder="Add Description"
                style={{width:"170px"}}
              />
              <label>number</label>
              <input
                type="text"
                name="number"
                value={data.number}
                onChange={handleChange}
                placeholder="Add Description"
                style={{width:"170px"}}
              />
            </div>


            {isEdit !== undefined ? (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleEdit()}
              >
                Save changes for edited value
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Add Todo on screen
              </button>
            )}

          </div>
        </div>
      </div>


      <table className="table">
        <thead>
          <tr>
            <th>Sr.no.</th>
            <th>Title</th>
            <th>Description</th>
            <th>number </th>
            <th>Actions</th>
          </tr>
        </thead>

{/* Dynamic input data which we are getting in ui */}
        <tbody>
          {submitData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.number}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => onEdit(index)}
                  style={{margin:"10px"}}
                >
                  OnEdit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

<Modal/>



    </>
  );
};

export default Todo;
