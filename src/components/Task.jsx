import { useContext } from "react";
import { TasksDispatchContext } from "../TasksContext";

export default function Task({ taskDetails }) {
  const dispatch = useContext(TasksDispatchContext);

  function deleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  function toggleTaskCompletion(taskId) {
    dispatch({
      type: "toggled",
      id: taskId,
    });
  }

  return (
    <li
      className={`my-2  p-2 rounded-md flex justify-between items-center ${
        taskDetails.isCompleted ? "bg-red-300" : "bg-zinc-300"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={taskDetails.isCompleted}
          onChange={() => toggleTaskCompletion(taskDetails.id)}
        />
        <span>{taskDetails.name}</span>
      </div>
      {/* <button className="btn">Modifica</button> */}
      <button className="btn" onClick={() => deleteTask(taskDetails.id)}>
        Elimina
      </button>
    </li>
  );
}
