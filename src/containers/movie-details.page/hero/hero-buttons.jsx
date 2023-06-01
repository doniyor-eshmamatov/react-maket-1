import React from "react";
import "./hero-buttons.css";

export default function HeroButtons() {
  return (
    <div className="hero-linkbox">
      <button className="hero-btn hero-btn-1">Watching Continue</button>
      <button className="hero-btn hero-btn-3">Add Watchlist</button>
      <div className="hero-socials">
        <button className="social-btn social-btn-1">Download</button>
        <button className="social-btn social-btn-3">Share</button>
        <button className="social-btn social-btn-3">Like</button>
      </div>
    </div>
  );
}
