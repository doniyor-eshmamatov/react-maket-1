import React, { useEffect, useState } from "react";
import "./populars.css";
import PopularSectionItems from "../../repositories/popularSectionItems";
import PopularListRender from "./popularListRender";

export default function Populars() {
  const [popularList, setPopularList] = useState([]);

  const getPopularList = async () => {
    const data = await PopularSectionItems.getPopulars();
    setPopularList(data);
  };

  useEffect(() => {
    getPopularList();
  }, []);

  return (
    <div className="populars">
      <div className="container-populars">
        <div className="populars-inner">
          <div className="just__gradient"></div>
          <h3 className="watch-title">Popular of the week</h3>
          <PopularListRender array={popularList}/>
        </div>
      </div>
    </div>
  );
}
