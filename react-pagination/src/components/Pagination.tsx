import { PaginationButton } from "./ui/PaginationButton";

export const Pagination = ({
  possiblePage,
  currentPage,
  handlePageChange,
}: {
  possiblePage: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}) => {
  const pages = new Array(possiblePage).fill("");
  return (
    <section className="flex gap-0.5">
      <PaginationButton
        index={0}
        handlePageChange={handlePageChange}
        disabled={currentPage === 1}
        active={false}
        title={"Prev"}
      />
      {pages.map((_page, index) => (
        <PaginationButton
          index={index}
          handlePageChange={handlePageChange}
          disabled={false}
          active={currentPage === index + 1}
          title={index + 1}
        />
      ))}
      <PaginationButton
        index={possiblePage}
        handlePageChange={handlePageChange}
        disabled={currentPage === possiblePage}
        active={false}
        title={"Next"}
      />
    </section>
  );
};
