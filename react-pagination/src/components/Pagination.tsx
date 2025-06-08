import { PaginationButton } from "./ui/PaginationButton";

export const Pagination = ({ possiblePage }: { possiblePage: number }) => {
  const pages = new Array(possiblePage).fill("");
  return (
    <section>
      <PaginationButton title={"Prev"} />
      {pages.map((_page, index) => (
        <PaginationButton title={index + 1} />
      ))}
      <PaginationButton title={"Next"} />
    </section>
  );
};
