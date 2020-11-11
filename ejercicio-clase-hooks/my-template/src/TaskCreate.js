import { useState } from "react"
import { useState } from 'react';


const TaskCreate = (props) => {

  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(11);

  const changeSubject = (ev) => {
    const inputChanged = ev.currentTarget;
    const newValue = inputChanged.value;

    setSubject(newValue);
  };

  const changeDate = (ev) => {
    const inputChanged = ev.currentTarget;
    const newValue = inputChanged.value;

    setDate(newValue);
  }

  const clickButton = (ev) => {
    props.handleCreate(subject, date);
  };

  return (
    <section className="new__fill">
      <input className="new__fill--subject" type="text" name="subject" id="subject" value={subject} onChange={changeSubject}></input>
      <input className="new__fill--dueTo" type="text" name="date" id="date" value={date} onChange={changeDate}></input>
      <div>
        <button className="new__fill--button" onClick={clickButton}>Añadir tarea</button>
      </div>
    </section>
  )
}

export default TaskCreate;