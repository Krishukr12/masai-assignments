export const PaginationButton = ({
  title,
  active,
  disabled,
  index,
  handlePageChange,
}: {
  title: string | number;
  active: boolean;
  disabled: boolean;
  index: number;
  handlePageChange: (pageNumber: number) => void;
}) => {
  return (
    <button
      onClick={() => handlePageChange(Number(index + 1))}
      disabled={disabled}
      className={` disabled:opacity-15 disabled:cursor-not-allowed border px-2 cursor-pointer ${
        active ? "bg-amber-500" : ""
      }`}
    >
      {title}
    </button>
  );
};
