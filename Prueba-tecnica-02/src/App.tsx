import { useItems } from "./hooks/useItems";
import { Item } from "./components/Item";

import "./App.css";
import { useSEO } from "./hooks/useSEO";

export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface Item {
  id: ItemId;
  timestamp: number;
  text: string;
}

// const INITIAL_ITEMS: Item[] = [
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: "Videojuegos" },
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: "Libros" },
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: "Musica" },
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: "Peliculas" },
// ];

function App() {
 const { items, addItem, removeItem } = useItems();
 useSEO({
  title: "Mi prueba tecnica",
  description: "Añadir y eliminar elementos de una lista",
 })

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input == null) return;

   addItem(input.value); 
   
    input.value = ""; 
  };

  const createHandleRemoveItem = (id: ItemId) => () => {
  removeItem(id); 
  };
  return (
    <main>
      <aside>
        <h1>Mi prueba tecnica</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form aria-label="Añadir elementos a la lista" onSubmit={handleSumbit}>
          <label>
            Elemento a introducir
            <input
              name="item"
              required
              placeholder="Introduce un elemento"
              type="text"
            />
          </label>
          <button>Añadir elemento</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>

        {items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
        ) : (
          <ul>
           
            {items.map((item) => {
              return <Item 
              handleClick={createHandleRemoveItem(item.id)}
              {...item} 
              key={item.id} />
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
