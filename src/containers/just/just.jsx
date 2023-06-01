import React, { useEffect, useState } from "react";
import "./just.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JustSectionList from "../../repositories/justRepository";
import JustListRender from "./justListRender";

export default function Just() {
  const [justList, setJustList] = useState([]);

  const getJustList = async () => {
    const data = await JustSectionList.getJustList();
    setJustList(data);
  };

  useEffect(() => {
    getJustList();
  }, []);

  return (
    <div className="just">
      <div className="container-just">
        <div className="just__inner">
          <div className="just__gradient"></div>
          <h3 className="just__title watch-title">Just Release</h3>
          <div className="just__list">
            <JustListRender array={justList} />
          </div>
        </div>
      </div>
    </div>
  );
}
