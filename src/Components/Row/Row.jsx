import React, { useEffect, useState } from "react";
import RowStyle from "./Row.style";
import { axios } from "../../Helpers/requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, poster }) {
	const [movies, setMovies] = useState([]); // To Store The Movies
	const [trailerUrl, setTrailerUrl] = useState("");
	// console.log(movies)
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			console.log(movie);
			let movieName = movie.title || movie.name || movie.originalTitle;
			console.log(movieName);
			movieTrailer(movieName)
				.then((url) => {
					console.log(url);
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};
	useEffect(() => {
		axios
			.get(fetchUrl, {}) //fetching the movies
			.then((res) => {
				setMovies(res.data.results); // storing the movies
			})
			.catch((err) => {
				console.error(err);
			});
	}, [fetchUrl]); // only run the function inside after the component has loaded
	return (
		<RowStyle>
			<h2 className='title'>{title}</h2>
			<div className='row_movies'>
				{movies.map((movie, index) => {
					const { poster_path, backdrop_path } = movie;
					return (
						// <div
						//     className={'movie'}
						//     key={index}
						// >
						<img
							key={index}
							onClick={() => handleClick(movie)}
							className={poster ? "poster" : ""}
							src={
								IMAGE_BASE_URL +
								(poster ? poster_path : backdrop_path)
							}
							alt='name'
						/>
						// </div>
					);
				})}
			</div>
			{trailerUrl && (
				<YouTube
					videoId={trailerUrl}
					opts={{
						height: "390",
						width: "100%",
						playerVars: {
							autoplay: 1,
						},
					}}
				/>
			)}
		</RowStyle>
	);
}

export default Row;
