import { Loading } from "./components/Loading";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  return (
    <main className="h-screen">
      <section className=" max-w-[20rem] m-auto mt-10">
        <SearchBar />
      </section>
      <section className="max-w-[30rem] m-auto min-h-[20rem]">
        <Loading />
      </section>
    </main>
  );
};
