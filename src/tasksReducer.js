/* Il reducer è una funzione che accetta due parametri: 
  lo stato corrente e l'azione che contiene i dettagli per modificarlo.
  Ritorna il nuovo stato aggiornato.
  Spesso si usa uno switch case, andando a selezionare il tipo di azione
  per eseguire il corretto aggiornamento dello stato.
*/
export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "added": {
      return [
        {
          id: action.id,
          name: action.name,
          isCompleted: false,
        },
        ...tasks,
      ];
    }
    case "toggled": {
      return tasks.map((task) => {
        // trovare il task da aggiornare in base all'id
        if (task.id === action.id) {
          // se isCompleted è false, diventa true e viceversa
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    }
    default: {
      return tasks;
    }
  }
}
