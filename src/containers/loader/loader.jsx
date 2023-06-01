import React from "react";

import loader from "./DoubleRing-1s-244px.svg";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        position: 'fixed',
        background: '#f1f2f3',
        top: '0',
        left:'0',
        right:'0',
        bottom:'0',
        zIndex: '10',
      }}
    >
      <img width={200} src={loader} alt="loader" />
    </div>
  );
}
