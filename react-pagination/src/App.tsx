import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "./config/axios";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationInfo {
  name: string;
  url: string;
}

export const App = () => {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 10;
  const currentPage = useRef<number>(0);

  const getCharacters = async () => {
    const res = await axiosInstance.get("/");
    setData(res.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(e.target.value));
    currentPage.current = parseInt(e.target.value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <main className="h-screen border border-red-600 flex justify-center items-center">
      <section>
        <section>
          <ol>
            {currentPageData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ol>
        </section>
        <section>
          <select value={page} onChange={handleChange}>
            {Array.from({ length: totalPages }, (_, index) => (
              <option key={index} value={index + 1}>
                Page {index + 1}
              </option>
            ))}
          </select>
        </section>
      </section>
    </main>
  );
};
