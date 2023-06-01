import React, { useEffect, useState } from "react";

import "./lists.css";

import ListSectionArr from "../../repositories/listsRepository";
import ListSectionRender from "./listSectionRender";

export default function Lists() {
  const [watchlist, setWatchlis] = useState([]);

  const renderLists = async () => {
    const data = await ListSectionArr.getLists();
    setWatchlis(data);
  };

  useEffect(() => {
    renderLists();
  }, []);

  return (
    <div className="lists">
      <div className="container-just">
        <div className="lists-inner">
          <div className="just__gradient"></div>
          <h2 className="lists-title">Your Watchlist</h2>
          <ListSectionRender array={watchlist} />
        </div>
      </div>
    </div>
  );
}
