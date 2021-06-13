import { useState } from "react";
import { v4 } from "uuid";

const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: v4(),
        name: value,
      },
    ]);
    setValue("");
  };
 const editTodo = (id) => {
  console.log(id)
   const todoEdit=todos.filter((item) =>  id == item.id)[0]
   console.log(todoEdit.name=value)
  const restTodos=todos.filter((item) =>  id != item.id)
   setTodos([...restTodos,todoEdit])

 }
  const deleteTodo = (id) => setTodos(todos.filter((todo) => id != todo.id));

  return (
    <div>
      <div className="container">
        <div className="input-container">
          <input
            onKeyDown={(e) => {
              if (e.code == "Enter") {
                addTodo();
              }
            }}
            value={value}
            onChange={onChange}
            className="my-input"
            type="text"
          />
          <button onClick={addTodo} className="btn">
            Add
          </button>
        </div>
        <div className="todos">
          {todos.map((e) => {
            return (
              <div className="todo" key={e.id}>
                <h2>{e.name}</h2>

                <div className="btns">
                <button className="edit" onClick={() => editTodo(e.id)}>🖊</button>
                <button className="delete"  onClick={() => deleteTodo(e.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
 