import { useState } from 'react';
import PropsTypes from "prop-types";

function TaskDetail(props) {

  const [styleTask, setStyleTask] = useState("pending");

  const clickTask = (ev) => {
    console.log("He hecho click" + props.subject);

    setStyleTask(styleTask === "done" ? "pending" : "done");
    //Con un if
    // if (styleTask === "done") {
    //   setStyleTask ("pending");
    // } else {
    //   setStyleTask ("done")
    // }
  }

  const styleDate = props.date <= 11 ? "hurry" : "";

  return (
    <div className={"list__item--details" + styleTask}>
      <input className="list__item--check" type="checkbox" name="task" id="task" checked="" onChange={clickTask}></input>
      <label className="list__item--subject" htmlFor="t1">{props.subject}</label>
      <span className={"list__item--dueTo" + styleDate}>{props.date} nov</span>
    </div>
  );
}

TaskDetail.PropsTypes = {
  subject: PropsTypes.string.isRequired,
  date: PropsTypes.number.isRequired,
}


export default TaskDetail;