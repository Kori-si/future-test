import React from "react";
import style from "./ShowBook.module.scss";
import none from "../../assets/img/none.png";

export const ShowBook = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className={style.overlay}>
        <div className={style.overlayInner}>
          <div className={style.innerBox}>
            <div className={style.innerBoxInf}>
            <img
              src={
                item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail
                  : none
              }
              alt="photo"
            />
            <div className={style.info}>
              <p className={style.info_title}>{item.volumeInfo.title}</p>
              <p className={style.info_author}>{item.volumeInfo.authors}</p>
              <p className={style.info_date}>{item.volumeInfo.publishedDate}</p>
              <p className={style.info_category}>
                {item.volumeInfo.categories}
              </p>

              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
              
            </div>
            <button className={style.close} onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>
            <p className={style.description}>{item.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
