import { useState } from "react";

interface PaginationReturn<T> {
  currentPage: number;
  totalPages: number;
  slicedData: T[];
  handlePageChange: (pageNumber: number) => void;
}

export const usePagination = <T,>({
  data,
  itemsPerpage = 10,
}: {
  data: T[];
  itemsPerpage?: number;
}): PaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(data.length / itemsPerpage);
  const startIndex = (currentPage - 1) * itemsPerpage;
  const endIndex = startIndex + itemsPerpage;

  const slicedData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    totalPages,
    slicedData,
    handlePageChange,
  };
};
