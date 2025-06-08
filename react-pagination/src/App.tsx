import { useEffect, useState } from "react";
import { axiosInstance } from "./config/axios";
import { Todos } from "./components/Todos";
import type { Todo } from "./types/todos.type";
import { Pagination } from "./components/Pagination";

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axiosInstance.get<Todo[]>("/todos");
      setTodos(res.data);
    };

    getTodos();
  }, []);

  return (
    <main className="h-screen border border-red-300">
      <section className="flex justify-center border border-red-400">
        <Todos todos={todos} />
      </section>
      <section className="flex justify-center">
        <Pagination possiblePage={10} />
      </section>
    </main>
  );
};
