import React from "react";
import book from "./assets/img/6140a289440e2.jpg";
import background from "./assets/img/fon.png";

function App() {
  return (
    <div className="wrapper">
      <div className="search">

        <img src={background} alt="" />
        <div className="search_box">
        <h2 className="search_box_title">Search for books</h2>
        <input type="text" className="search_box_input" placeholder="Search..." />
        </div>
        
      </div>
      <div className="sort">
        <ul>
          Category <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg>
          {/* <li>all</li>
          <li>art</li>
          <li>biography</li>
          <li>computers</li>
          <li>history</li>
          <li>medical</li>
          <li>poetry</li> */}
        </ul>
        <ul>
          Sort <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg>
          {/* <li>relevance </li>
          <li>newest</li> */}
        </ul>
      </div>
      <div className="list_books">
        <div className="list_books_item">
          <img src={book} alt="" />
          <p>Название</p>
          <p>категория</p>
          <p>автор</p>
        </div>
        <div className="list_books_item">
          <img src={book} alt="" />
          <p>Название</p>
          <p>категория</p>
          <p>автор</p>
        </div>
        <div className="list_books_item">
          <img src={book} alt="" />
          <p>Название</p>
          <p>категория</p>
          <p>автор</p>
        </div>
        <div className="list_books_item">
          <img src={book} alt="" />
          <p>Название</p>
          <p>категория</p>
          <p>автор</p>
        </div>
        <div className="list_books_item">
          <img src={book} alt="" />
          <p>Название</p>
          <p>категория</p>
          <p>автор</p>
        </div>
        <div className="list_books_item">
          <img src={book} alt="" />
          <p>Название</p>
          <p>категория</p>
          <p>автор</p>
        </div>
        
        

      </div>
      
    </div>
  );
}

export default App;
