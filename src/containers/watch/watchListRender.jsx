import React from "react";

export default function WatchListRender({array}) {
  return (
    <div className="watch-list">
      {array.map((el) => {
        return (
          <div
            className="watch-item"
            key={el.id}
            style={{ backgroundImage: `url(${el.img_url})` }}
          >
            <div className="watch-item__inner">
              <h3 className="watch-item__title">{el.title}</h3>
              <p className="watch-item__year">{el.year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
