import React, { useState } from "react";
import Todoitems from "./Todoitems";
import Button from "react-bootstrap/Button";

const FormT = () => {
  const [todo, settodo] = useState({ title: "", description: "" });
  const [Todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletebutton = (ind) => {
    let newData = Todos.filter((item, index) => index !== ind);
    console.log("deleted index -=-=-=-=->");
    setTodos(newData);
    // second method to delete
    // let newData = [...Todos];
    // newData.splice(ind, 1);
    // setTodos(newData);
  };

  const editbutton = (ind) => {
    let oldData = Todos[ind];
    settodo(oldData);
    console.log(
      "Edit button ,checking what values we have in Todo then storing those values in old todo list ",
      oldData
    );

    setEditTodo(ind);
    handleShow();
  };
  return (
    <div>
      <div class="flex justify-content-center">
        <button
          class=" text-xl px-4 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 m-2 w-1/4  m-4 "
          onClick={handleShow}
        >
          Add Todo
        </button>
      </div>

      <Todoitems
        show={show}
        handleClose={handleClose}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setTodos={setTodos}
        Todos={Todos}
        todo={todo}
        settodo={settodo}
      />

      <div class="grid grid-flow-col text-center">
        <table class="table-auto border-collapse border ">
          <thead>
            <tr>
              <th class="border-2 border-green-600 bg-emerald-900 text-white ">
                Id
              </th>
              <th class="border-2 border-green-600 bg-emerald-900 text-white  ">
                Title
              </th>
              <th class="border-2 border-green-600 bg-emerald-900 text-white ">
                Description
              </th>
              <th class="border-2 border-green-600 bg-emerald-900 text-white  w-2/4 ">
                Manage
              </th>
            </tr>
          </thead>
          <tbody class="w-2/4 content-center     ">
            {Todos.map((item, index) => (
              <tr class="border-2 border-gray-600" key={index}>
                <td class=" text-amber-700  text-lg truncate">{index + 1}.</td>
                <td class="border-2 border-gray-600">{item.title}</td>
                <td class="border-2 border-gray-600">{item.description}</td>
                <td class="border-2 border-gray-600">
                  <button
                    onClick={() => editbutton(index)}
                    class="bg-green-800 hover:bg-violet-600  hover:text-white active:bg-violet-700 focus:outline-white focus:ring focus:ring-violet-300 m-4 w-24 h-10 font-semibold rounded-lg
              outline outline-offset-2 outline-blue-500 drop-shadow-xl 
              "
                  >
                    Edit Todo
                  </button>

                  <button
                    onClick={() => deletebutton(index)}
                    class="bg-pink-800 hover:bg-red-600  hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 m-4 w-24 h-10 rounded-lg
              font-semibold outline outline-offset-2 outline-blue-500 drop-shadow-xl "
                  >
                    Delete Todo
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormT;
