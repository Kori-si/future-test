import style from "./BookItem.module.scss";
import React from "react";
import none from "../../assets/img/none.png";
import { ShowBook } from "../ShowBook/ShowBook";

export const BookItem = ({ item }) => {
  const [show, setShow] = React.useState(false);
  const [bookItem, setItem] = React.useState();
  return (
    <>
      <div className={style.book_item} onClick={()=>{setShow(true);setItem(item)}}>
        <img
          src={
            item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.thumbnail
              : none
          }
          alt="photo"
        />
        <p className={style.book_item_category}>{item.volumeInfo.categories}</p>
        <p className={style.book_item_title}>{item.volumeInfo.title}</p>
        <p className={style.book_item_author}>{item.volumeInfo.authors}</p>
      </div>
      <ShowBook show={show} item={item} onClose={() => setShow(false)} />
    </>
  );
};
