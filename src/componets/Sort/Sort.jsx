import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlise";
import style from "./Sort.module.scss";

export const Sort = ({
  handleFuncSort,
  sortList,
}) => {
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj) => {
    handleFuncSort(obj);
    setOpen(false);
  };

  return (
    <div className={style.sort}>
      <ul>
        <div className={style.sort_filter}>
          <b>Sorting by</b>

          <span onClick={() => setOpen(!open)}>
            {sort.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
            </svg>
          </span>
          <div className={style.sort_filter_new}>
            {open && (
              <ul>
                {sortList.map((obj, i) => (
                  <li
                    key={i}
                    onClick={() => onClickListItem(obj)}
                    className={sort.id === obj.id ? "active" : ""}
                  >
                    {obj.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
};
