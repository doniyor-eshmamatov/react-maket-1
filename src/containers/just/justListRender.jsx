import React from "react";

export default function JustListRender({array}) {
  return (
    array?.map((el) => {
        return (
          <li
            key={el.title}
            className="just__item just__item-1"
            style={{ backgroundImage: `url(${el.img_url})` }}
          >
            <p className="just__item__title">{el.title}</p>
            <p className="populars-item-text-4">
              <strong>{el.rate}</strong>
              {el.type}
            </p>
          </li>
        );
      })
  );
}
