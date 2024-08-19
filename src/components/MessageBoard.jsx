import { useState } from "react";



function MessageBoard() {
  const [toDo, setTodo] = useState(["Hello all ! This is first message."]);
const [toDoText, setToDoText] = useState("");

const handleToDoTextChange = (event) => {
  setToDoText(event.target.value)
}

const addToDo = (event) => {
  event.preventDefault();
  const newToDo = [...toDo];
  newToDo.push(toDoText);
  setTodo(newToDo);
}

const deleteToDo = (index) => {
  const newToDo = [...toDo];
  newToDo.splice(index, 1);
  setTodo(newToDo);
}
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
    <form>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleToDoTextChange}
            value={toDoText}
          />
        </label>
        <button className="submit-message-button" onClick={addToDo}>Submit</button>
      </div>
      </form>
      <div className="board">
        
        <ul>
          {
            toDo.map((item, index) => {return <div className="message" key={index}>
                          <li key={index}><h1>{item}</h1>
                          <button className="delete-button"
                          onClick={ () => {deleteToDo(index)}}>x</button></li></div>} )
          }
        </ul>
        
      </div>
    </div>
  );
}

export default MessageBoard;
