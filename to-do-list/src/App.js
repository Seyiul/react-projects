import { useState } from "react";
import styles from "./App.module.css";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const delToDo = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  return (
    <div className={styles.container}>
      <h1>💖My To Dos ({toDos.length})💖</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul className={styles.list}>
        {toDos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              onClick={() => delToDo(index)}
              style={{
                border: "none",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
