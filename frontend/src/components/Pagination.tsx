// src/components/ui/Pagination.tsx

import Link from "next/link";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i}
          href={`?page=${i + 1}`}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? "bg-primary text-white" : "bg-white"
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}
