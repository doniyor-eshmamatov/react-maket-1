import React from "react";
import HeroButtons from "./hero-buttons";
import "./hero.css";
import Loader from "../../loader/loader";

export default function Hero({ oneMovie }) {
  if (oneMovie) {
    return (
      <section
        className="md-hero"
        style={{ backgroundImage: `url(${oneMovie.img_url})`, backgroundSize: 'contain' }}
      >
        <div className="container">
          <div className="md-hero-inner">
            <p className="hero-text-1">Series</p>
            <h1 className="hero-title">{oneMovie.title}</h1>
            <p className="hero-text-2">{oneMovie.type}</p>
          </div>
          <HeroButtons />
        </div>
      </section>
    );
  } else {
    return <Loader />;
  }
}

//
