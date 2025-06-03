import { Info } from "./components/Info";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <main className="container">
      <Navbar />
      <Info />
      <Footer />
    </main>
  );
};
