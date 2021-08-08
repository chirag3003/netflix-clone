import React from 'react'
//components
import Row from "./Components/Row/Row";
import Banner from "Components/Banner/Banner"
//api
import {requests} from "./Helpers/requests";


function App() {

    return (
        <div className="App" style={{
            height: '100vh',
            width: '100vw',
            overflowY: 'auto',

        }}>
            <Banner/>
            <div className="rows" style={{
                padding:'5% 5%',
            }}>
                <Row title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals} poster/>
                <Row title={'Trending Now'} fetchUrl={requests.fetchTrending}/>
                <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated}/>
                <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies}/>
                <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies}/>
                <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies}/>
                <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies}/>
                <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries}/>
            </div>
        </div>
    )
}

export default App
