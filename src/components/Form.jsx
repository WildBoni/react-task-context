import { useRef } from "react";
import Button from "./ui/Button";
import { useContext } from "react";
import { TasksDispatchContext } from "../TasksContext";
import { nanoid } from "nanoid";

export default function Form() {
  // uso un ref per accedere al testo scritto dall'utente nell'input
  const inputRef = useRef();
  // Con useContext richiediamo il context a cui vogliamo accedere e lo passiamo a una variabile
  // In questo modo possiamo effettuare i dispatch di un'azione.
  const dispatch = useContext(TasksDispatchContext);

  // aggiungo un task
  function handleAddTask() {
    // Effettuo il dispatch: passo i nuovi dati al reducer,
    // che si occuperà di aggiornare l'elenco di task
    dispatch({
      type: "delete",
      id: nanoid(),
      name: inputRef.current.value,
    });
  }
  return (
    <>
      <h2>Che cosa devi fare?</h2>
      <input
        type="text"
        ref={inputRef}
        className="border border-gray-400 p-2 mt-2 me-2 rounded-md"
      />
      <Button onClick={handleAddTask}>
        Aggiungi
        {/* <span className="font-bold"> nuovo task</span> */}
      </Button>
    </>
  );
}
