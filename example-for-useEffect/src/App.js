import { useState, useEffect } from "react";
import styles from "./App.module.css";

function Hello() {
  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed :(");
  // }, []);
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const clickBtn = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter & keyword' changes.");
  }, [counter, keyword]);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={clickBtn}>{showing ? "HIDE" : "SHOW"}</button>
      <br></br>
      <h1 className={styles.title}>{counter}</h1>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      />
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
