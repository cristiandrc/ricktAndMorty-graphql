import { Link } from "react-router-dom";
import "./style.scss";

type Props = {
  pages: number;
  currentPage: string | null;
};

const validateCurrentPage = (
  page: number,
  currentPage: string | null
): string => {
  if (currentPage !== null) {
    return page === parseInt(currentPage) ? "active" : "";
  } else {
    return page === 1 ? "active" : "";
  }
};

export const Pagination = ({ pages, currentPage }: Props) => {
  let pagesElement: number[] = [];

  if (currentPage !== null) {
    let pageNumber = parseInt(currentPage);
    if (pageNumber <= 3) {
      for (let i = 1; i <= 7; i++) {
        pagesElement.push(i);
      }
    } else if (pageNumber >= pages - 3) {
      for (let i = pages - 6; i <= pages; i++) {
        pagesElement.push(i);
      }
    } else {
      for (let i = pageNumber - 3; i <= pageNumber + 3; i++) {
        pagesElement.push(i);
      }
    }
  } else {
    for (let i = 1; i <= 7; i++) {
      pagesElement.push(i);
    }
  }

  return (
    <div className="container-pagination">
      <Link className="number-page" to={"/"}>
        First
      </Link>
      {pagesElement.map((i) => (
        <Link
          key={i}
          className={`number-page ${validateCurrentPage(i, currentPage)} `}
          to={`/?page=${i}`}
        >
          {i}
        </Link>
      ))}
      <Link className="number-page" to={`/?page=${pages}`}>
        Last
      </Link>
    </div>
  );
};
