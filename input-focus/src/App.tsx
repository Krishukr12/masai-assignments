import { useRef, useState } from "react";

export const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocusInput = () => {
    inputRef.current?.focus();
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = "blue";
      inputRef.current.style.color = "white";
    }
    setIsFocused(true);
  };

  return (
    <main className="min-h-screen border border-red-300 flex justify-center items-center">
      <section className="flex flex-col gap-4">
        <input
          className="shadow p-5 outline-blue-600"
          ref={inputRef}
          placeholder="Enter name... "
        />
        {isFocused ? <h3>Focused</h3> : null}
        <button className="shadow p-2" onClick={handleFocusInput}>
          Focus Input
        </button>
      </section>
    </main>
  );
};
