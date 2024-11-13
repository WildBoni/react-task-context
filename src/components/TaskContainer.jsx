import { useContext } from "react";
import TaskCounter from "./TaskCounter";
import Tasks from "./Tasks";
import { TasksContext } from "../TasksContext";

export default function TaskContainer() {
  const tasks = useContext(TasksContext);
  let taskAmount = tasks.length;

  return (
    <section>
      <TaskCounter amount={taskAmount} />
      <Tasks tasksArray={tasks} />
    </section>
  );
}
