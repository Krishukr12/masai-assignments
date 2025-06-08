import type { Todo } from "../types/todos.type";

export const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <section className="flex gap-2 border">
      <input type="checkbox" checked={todo.completed} />
      <p>{todo.title}</p>
    </section>
  );
};
