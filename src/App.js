import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import "./App.css";

let todos = [
  { id: 1, title: "Go home", done: true },
  { id: 2, title: "Go sleep", done: false },
];

export function App() {
  const [todosList, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    let id = 1;
    for (let item of todosList) {
      id = item.id >= id ? item.id +1 : id;
    }
    
    const newTask = {
      id: id,
      title: text,
      done: false,
    };
    console.log(newTask);
    if (text) {
      setTodos((todosList) => [...todosList, newTask]);
      setText("");
    }
  };

  const removeTask = (id) => {
    const newArray = todosList.filter((item) => item.id !== id);
    console.log("deleted " + id);
    setTodos(newArray);
  };

  const marktodoDone = (id) => {
    const result = todosList.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodos(result);
  };
  return (
    <div className="container">
      <Header />
      <List
        todos={todosList}
        removeTask={removeTask}
        marktodoDone={marktodoDone}
      />
      <div className="form">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="button" onClick={() => addTask()}>
          Add
        </button>
      </div>
    </div>
  );
}

/* class App extends React.Component {
  constructor(props){
    super(props);
    this.state={todosList: todos};
  }
  removeItem (itemIndex){
    let res = this.state.todosList.splice(itemIndex, 1);
    this.setState({todosList: res})
  }

  addItem(todoItem){
    let res = this.state.todosList.unshift({
      id: this.state.todosList.length+1,
      title: todoItem.text,
      done: false
    })

    this.setState({todosList: res})
  }
  render() {
    return (
      <div className='container'>
        <Header />
        <List todos={todos}/>
      </div>

    );
  }
}
 */
export default App;
