import React from "react";

export default function PopularListRender({ array }) {
  return (
    <ul className="populars-list">
      {array.map((el) => {
        return (
          <li
            className={
              el.id === "1" ? "populars-item populars-item-1" : "populars-item"
            }
            key={el.id}
          >
            <div className="populars-item-number">{el.id}</div>
            <div
              className="populars-item-img"
              style={{ backgroundImage: `url(${el.img_url})` }}
            ></div>
            <div className="populars-item-content">
              <p className="populars-item-text-1">{el.status}</p>
              <p className="populars-item-text-2">{el.title}</p>
              <p className="populars-item-text-3">{el.ganre}</p>
              <p className="populars-item-text-4">
                <strong>{el.rate}</strong>
                {el.type}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
