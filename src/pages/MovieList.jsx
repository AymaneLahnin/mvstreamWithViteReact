import React from "react"
import { Card } from "../components";
import useFetch from "../hooks/useFetch"
const MovieList = ({apiPath}) => {

  const {yoho:movies}=useFetch(apiPath)

  return (
    <main className="dark:bg-gray-800">
      <section className="lg:ml-40 max-w-7xl mx-auto py-7  ">
        <div className="flex justify-start flex-wrap others:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
export default MovieList;