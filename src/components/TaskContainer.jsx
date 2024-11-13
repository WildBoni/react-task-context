import { useContext } from "react";
import TaskCounter from "./TaskCounter";
import Tasks from "./Tasks";
import { TasksContext } from "../TasksContext";

export default function TaskContainer({ filter, textFilter }) {
  const tasks = useContext(TasksContext);

  // filtro in base alla stringa contenuta in filter ("tutti" "rimasti" "completati")
  let filteredTasks = tasks
    .filter((task) => {
      // se filter corrisponde a "completati", ritorno i task con proprietà isCompleted impostata a true
      if (filter === "completati") return task.isCompleted;
      // se filter corrisponde a "rimasti", ritorno i task con proprietà isCompleted impostata a false (uso l'operatore NOT (!))
      if (filter === "rimasti") return !task.isCompleted;
      // se filter corrisponde a "tutti", allora ritorno true per ogni task dell'array
      if (filter === "tutti") return true;
    })
    .filter((task) => {
      return task.name.toLowerCase().includes(textFilter.toLowerCase());
    });

  let taskAmount = tasks.length;

  return (
    <section>
      <TaskCounter amount={taskAmount} />
      <Tasks tasksArray={filteredTasks} />
    </section>
  );
}
