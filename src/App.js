import React, { useEffect, useState } from "react";
import axios from "axios";
import background from "./assets/img/fon.png";
import { BookItem } from "./componets/Block/BookItem";
import { Search } from "./componets/Search/Search";
import { Sort } from "./componets/Sort/Sort";
import { Pagination } from "./componets/Pagination/Pagination";

const list = [
  { id: 1, name: "relevance" },
  { id: 2, name: "newest" },
];

const urlApi = "https://www.googleapis.com/books/v1/volumes/?q=";
const keyApi = "&key=AIzaSyDMKoTpafmPO1XOyoeqhM-1F37lknXZqgA";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [bookData, setBookData] = React.useState([]);
  const [errorSearch, setErrorSearch] = React.useState("");
  const [sort, setSort] = React.useState({ id: 1, name: "relevance" });
  const [maxResults, setMaxResults] = useState(30);

  const handleSort = (value) => setSort(value);
  const handleChange = (value) => setSearchValue(value);

  const [currentPage, setCurrentPage] = React.useState(1);

  const searchBookQuery = () => {
    axios
      .get(
        `${urlApi}${searchValue}&orderBy=${sort.name}${keyApi}&maxResults=${maxResults}&startIndex=${currentPage}`
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => setErrorSearch(err));
  };

  const searchBook = (event) => {
    if (event.key === "Enter") {
      searchBookQuery();
    }
  };

  const searchBookClick = () => {
    searchBookQuery();
  };

  useEffect(() => {
    searchBookQuery();
  }, [sort, currentPage]);

  return (
    <div className="wrapper">
      <div className="search">
        <img src={background} alt="" />
        <div className="search_box">
          <h2 className="search_box_title">Search for books</h2>
          <Search
            searchBook={searchBook}
            searchValue={searchValue}
            onChange={handleChange}
            searchBookClick={searchBookClick}
          />
        </div>
      </div>

      <Sort handleFuncSort={handleSort} list={list} />

      <div className="list_books">
        {bookData?.map((item, index) => (
          <BookItem item={item} key={index} />
        ))}
      </div>
      <Pagination
        onChangePage={(number) => setCurrentPage(number)}
        pageCount={maxResults}
      />
    </div>
  );
}

export default App;
