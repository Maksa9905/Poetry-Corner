import { compareFunctions } from "../../../Helpers/compareFunctions";
import { SearchQueryContext } from "../../../Context/searchQueryContext";
import { useContext } from "react";
import { useGridInitialization } from "../../../Hooks/useGridInitialization";
import AuthorCard from "../../../Components/AuthorCard/AuthorCard";
import { authorsPageGrid } from "./AuthorsPage.config";

export default function SortedAuthors({ authors, sortType }) {
  const authorsGrid = useGridInitialization(authorsPageGrid);
  const sortedAuthors = [...authors].sort(compareFunctions[sortType]);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${authorsGrid.columns}, 1fr)`,
      }}
      className="py-[25px] grid"
    >
      {[...sortedAuthors].map((author) => {
        return <AuthorCard author={author} key={author.id}></AuthorCard>;
      })}
    </div>
  );
}
