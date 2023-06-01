import React from "react";

export default function ListSectionRender({ array }) {
  return (
    <ul className="lists-list">
      {array.map((el) => {
        return (
          <li className="lists-item" key={el.title}>
            <img src={el.img_url} alt=" " />
            <h3 className="lists-item-title">{el.title}</h3>
            <p className="populars-item-text-4">
              <strong>{el.rate}</strong>
              {el.type}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
