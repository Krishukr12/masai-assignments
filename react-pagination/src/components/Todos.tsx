import type { Todo } from "../types/todos.type";
import { TodoCard } from "./TodoCard";

export const Todos = ({ todos }: { todos: Todo[] }) => {
  return (
    <section className="text-center">
      <h2>Todos</h2>
      {todos.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </section>
  );
};
