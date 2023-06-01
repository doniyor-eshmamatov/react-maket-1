import React, { useEffect, useState } from "react";
import Header from "./header/header";
import Hero from "./hero/hero";
import { useParams } from "react-router-dom";
import ConwatchingRepository from "../../repositories/conwatchingRepository";

export default function MovieDetailsPage() {
  const [oneMovie, setOneMovie] = useState(null);

  const { id } = useParams();

  const getOneMovieById = async () => {
    const data = await ConwatchingRepository.getOneMoviePage(id);
    setOneMovie(data);
  };

  useEffect(() => {
    getOneMovieById();
  }, []);
  

  return (
    <div>
      <Header />
      <Hero oneMovie={oneMovie} />
    </div>
  );
}
