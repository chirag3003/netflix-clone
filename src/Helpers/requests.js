import Axios from "axios";
//get the api key from www.themoviedb.org
const KEY = "898a586a788930fd44a450ec442f79de";

export const axios = Axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export const requests = {
	fetchTrending: `/trending/all/week?api_key=${KEY}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10759`,
	fetchDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`,
};
