import React, {useEffect, useState} from 'react';
import RowStyle from "./Row.style"
import {axios} from "../../Helpers/requests";

function Row({title, fetchUrl, poster}) {
    const [movies, setMovies] = useState([]); // To Store The Movies
    // console.log(movies)
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {

        axios.get(fetchUrl, {}) //fetching the movies
            .then(res => {
                setMovies(res.data.results) // storing the movies
            })
            .catch(err => {
                console.error(err);
            })
    }, [fetchUrl]); // only run the function inside after the component has loaded
    return (
        <RowStyle>
            <h2 className="title">{title}</h2>
            <div className="row_movies">
                {movies.map(({poster_path, backdrop_path}, index) => {
                    return (
                        // <div
                        //     className={'movie'}
                        //     key={index}
                        // >
                        <img
                            key={index}
                            className={poster?'poster':''}
                            src={(IMAGE_BASE_URL + (poster ? poster_path : backdrop_path))}
                            alt="name"
                        />
                        // </div>
                    )
                })}
            </div>
        </RowStyle>
    );
}

export default Row;