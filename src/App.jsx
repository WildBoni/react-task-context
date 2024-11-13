import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";
import TextFilter from "./components/TextFilter";
import Card from "./lezione/Card";
// import dummyTasks from "./data/tasks";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  // Inizializzo l'elenco di task con l'elenco di task presenti in localStorage, OPPURE con un array vuoto)
  const [filter, setFilter] = useState("tutti");
  const [textFilter, setTextFilter] = useState("");

  // filtro in base alla stringa contenuta in filter ("tutti" "rimasti" "completati")
  // let filteredTasks = tasks
  //   .filter((task) => {
  //     // se filter corrisponde a "completati", ritorno i task con proprietà isCompleted impostata a true
  //     if (filter === "completati") return task.isCompleted;
  //     // se filter corrisponde a "rimasti", ritorno i task con proprietà isCompleted impostata a false (uso l'operatore NOT (!))
  //     if (filter === "rimasti") return !task.isCompleted;
  //     // se filter corrisponde a "tutti", allora ritorno true per ogni task dell'array
  //     if (filter === "tutti") return true;
  //   })
  //   .filter((task) => {
  //     return task.name.toLowerCase().includes(textFilter.toLowerCase());
  //   });

  return (
    <>
      <h1 className="text-2xl mt-16 mb-4 text-center">I miei task: {filter}</h1>
      <div className="bg-white max-w-screen-sm mx-auto p-4">
        <Form />
        <Filters setFilter={setFilter} />
        <TextFilter textFilter={textFilter} setTextFilter={setTextFilter} />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
