import React, { useState,useEffect } from "react";

const useFetch=(apiPath,queryTerm="")=>{

  const apikey=import.meta.env.VITE_TMDB_API_KEY
  const baseUrl=import.meta.env.VITE_BASE_URL

    const [yoho,setData]=useState([])
    const url = `${baseUrl}/${apiPath}?api_key=${apikey}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const moviesJson = await response.json();
          setData(moviesJson.results);
        }
        fetchMovies();
      }, [url])
    console.log(url)
    return {yoho}
}
export default useFetch