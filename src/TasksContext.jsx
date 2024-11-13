import { useReducer, useEffect } from "react";
import { createContext, useState } from "react";
import { tasksReducer } from "./tasksReducer";

// Creo due context: uno per i task e uno per il dispatch delle azioni.
// Userò un provider per fornire il context ai componenti.
// I componenti potranno accedere al context con useContext.
export const TasksContext = createContext();
export const TasksDispatchContext = createContext();

// cerco tasks salvati in localStorage: se non ce ne sono, inizio con un array vuoto
let initialData = JSON.parse(localStorage.getItem("tasks")) || [];

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialData);

  useEffect(() => {
    // salvo i tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
