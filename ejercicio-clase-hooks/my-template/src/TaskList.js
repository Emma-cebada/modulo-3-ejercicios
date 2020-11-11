import TaskDetail from "./TaskDetail";

function TaskList(props) {

  const htmlList = props.list.map((eachTask, 1) => (
    <li key={i} className="list__item"><TaskDetail subject={eachTask.subject} date={eachTask.date} /></li>
  )
  );
  return (
    <ul className="list">
      {htmlList}
    </ul>
  );
}

export default TaskList;