import React from "react";
import { Card } from "../components";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const SearchPage =({apiPath})=>{
    const [searchParams]=useSearchParams();
    const queryTerm=searchParams.get("movieName");
    
  const {yoho:movies}=useFetch(apiPath,queryTerm)

  return (
    <main className="dark:bg-gray-800">
        <section className="">
            <p className="ml-5 text-3xl text-gray-600 dark:text-gray-50">
                {movies.length === 0 ? "walo makaynash had smia":`results for ${queryTerm}`}
            </p>
        </section>
      <section className="max-w-7xl mx-auto py-7  ">
        <div className=" flex justify-center flex-wrap">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
export default SearchPage;