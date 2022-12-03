import React, { useEffect, useState } from "react";
import BannerStyle from "./Banner.style";
import { axios, requests } from "Helpers/requests";

function Banner(props) {
    const [movie, setMovie] = useState();
    movie && console.log(movie);
    useEffect(() => {
        axios
            .get(requests.fetchNetflixOriginals, {})
            .then((res) => {
                const randomIndex = Math.floor(Math.random() * res.data.results.length);
                setMovie(res.data.results[randomIndex]);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n - 2) + "..." : str;
    };

    return (
        <BannerStyle
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            }}
        >
            <div className="contents">
                <h1 className={"title"}>{movie?.title || movie?.name || movie?.title}</h1>
                <div className="buttons">
                    <button>play</button>
                    <button>more</button>
                </div>
                <div className="description">{truncate(movie?.overview, 150)}</div>
            </div>
            <div className="fade" />
        </BannerStyle>
    );
}

export default Banner;
