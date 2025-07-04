import type { Todo } from "../types/todos.type";

export const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <section className="flex gap-2">
      <input type="checkbox" checked={todo.completed} />
      <p className={`${todo.completed ? "line-through" : ""}`}>{todo.title}</p>
    </section>
  );
};
