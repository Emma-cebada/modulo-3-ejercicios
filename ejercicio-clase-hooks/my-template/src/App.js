import { useState } from 'react';
import './App.css';
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";


function App(props) {

  const initialData = [
    { subject: "Dar clase de Hooks", date: 11 },
    { subject: "Comer", date: 11 },
    { subject: "Comer", date: 12 },
  ];

  const [taskList, setTaskList] = useState(initialData);
  const createNewTask = (newSubject, newDate) => {
    const newTask = { subject: newSubject, date: newDate };
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <main className="container">
        <h3 className="app__title">Lista de tareas</h3>
        <TaskList list={taskList}></TaskList>
        <TaskCreate handleCreate={createNewTask} />
      </main>
    </div>
  );
}

export default App;
