import type { Todo } from "./types/todos.type";

import { useEffect, useState } from "react";
import { axiosInstance } from "./config/axios";
import { usePagination } from "./components/hooks/usePagination";
import { Todos } from "./components/Todos";
import { Pagination } from "./components/Pagination";

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { currentPage, totalPages, slicedData, handlePageChange } =
    usePagination({
      data: todos,
    });

  useEffect(() => {
    const getTodos = async () => {
      const res = await axiosInstance.get<Todo[]>("/todos");
      setTodos(res.data);
    };

    getTodos();
  }, []);

  return (
    <main className="h-screen border border-red-300">
      <section className="flex justify-center">
        <Todos todos={slicedData} />
      </section>
      <section className="flex justify-center">
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          possiblePage={totalPages}
        />
      </section>
    </main>
  );
};
