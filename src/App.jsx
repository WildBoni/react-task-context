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

  return (
    <>
      <h1 className="text-2xl mt-16 mb-4 text-center">I miei task: {filter}</h1>
      <div className="bg-white max-w-screen-sm mx-auto p-4">
        <Form />
        <Filters setFilter={setFilter} />
        <TextFilter textFilter={textFilter} setTextFilter={setTextFilter} />
        <TaskContainer textFilter={textFilter} filter={filter} />
      </div>
    </>
  );
}

export default App;
