import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Todoitems = ({
  show,
  handleClose,
  editTodo,
  setEditTodo,
  Todos,
  setTodos,
  todo,
  settodo,
}) => {
  const handleChange = (e) => {
    //taking two input fields and destructuring them
    const { name, value } = e.target;
    // making shallow copies using spread operator so that our new data will be stored in previous data
    settodo({ ...todo, [name]: value });
    console.log(` storing values ${name} - ${value}`);
  };

  console.log("--=-=--=->", Todos);
  const handleSubmit = (e) => {
    //prevent button from submit
    e.preventDefault();

    // ure apa check kr rhe 3rd state vich index di value agr khali nhi hai ta eh chle
    if (editTodo !== null) {
      // variable leya te puree array de upar map lgaya jo apa ne edit di value te click kita hai oho apa dusre vich store krwa skeye..

      const modifiedTodo = Todos.map((ele, ind) => {
        if (editTodo === ind) {
          ele = { ...todo };
        }

        return ele;
      });
      // value store krwa diti  setTodos vich modified todos di
      setTodos(modifiedTodo);
      console.log("modified Todos name", modifiedTodo);

      // To find index of edited todo  which got edited
      console.log("---- edited index", editTodo);
      setEditTodo(null);
      handleClose();
    } else {
      // Eh normal jdo apa data add krunge input fields te us lyi
      setTodos([...Todos, todo]);
      console.log("SUBMIT DATA else condition working", todo);
      handleClose();
    }
    settodo({
      title: " ",
      description: " ",
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title class="text-sky-900 text-xl" >Add Todo in list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label class="text-2xl text-violet-900 m-2">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="title"
                value={todo.title}
                onChange={handleChange}
                autoFocus
              
              />
              <Form.Label class="text-2xl text-violet-900 m-2">Description</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={todo.description}
                onChange={handleChange}
                autoFocus
                class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Todoitems;
