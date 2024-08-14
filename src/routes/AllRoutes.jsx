import { Routes, Route } from "react-router-dom";
import { MovieDetails,MovieList,PageNotFound,SearchPage } from "../pages";

const AllRoutes=()=>{
    return(
        <>
        <Routes>
        <Route>
            <Route path="" element={<MovieList apiPath="movie/now_playing"/>} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>} />
            <Route path="search" element={<SearchPage apiPath="search/movie"/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Route>
        </Routes>
        </>
    )
}
export default AllRoutes;