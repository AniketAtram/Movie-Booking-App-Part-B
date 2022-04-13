import React from 'react';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { SubHeading } from '../../common/StyledContainers/Containers';
import Header from '../../common/header/Header';
import SingleLineImageList from './HomeComponents/SingleLineImageList';
import ReleasedMovies from './HomeComponents/ReleasedMovies';
function Home(props) {
	// state for the single line image list
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	// state for released movies
	const [releasedMovies, setReleasedMovies] = useState([]);
	// genres
	const [genres, setGenre] = useState([]);
	// artists
	const [artists, setArtists] = useState([]);

	useEffect(()=>{
		const moviesData = props.moviesData;
		let upcomingMoviesArray = [];
		let releasedMoviesArray = [];

		for (let idx in moviesData) {
			upcomingMoviesArray.push(
				{
					movieName:moviesData[idx].title,
					imageUrl:moviesData[idx].poster_url
			    }
			);
			releasedMoviesArray.push(
				{
					movieId:moviesData[idx].id,
					movieName:moviesData[idx].title,
					imageUrl:moviesData[idx].poster_url,
					releseDate: new Date(moviesData[idx].release_date).toDateString(),
					genre:moviesData[idx].genres,
					artist:moviesData[idx].artists,
					duration:moviesData[idx].duration,
					trailer:moviesData[idx].trailer_url,
					wiki:moviesData[idx].wiki_url,
					plot:moviesData[idx].storyline,
					rating:moviesData[idx].critics_rating
			    }
			)
		}
		setUpcomingMovies(upcomingMoviesArray);
		setReleasedMovies(releasedMoviesArray);
		setGenre(props.genres);
		setArtists(props.artists);
	},[props.moviesData, props.genres, props.artists]);

    return (
        <Fragment>
            <Header showBookButton={false}/>
            <SubHeading>Upcoming Movies</SubHeading>
			<SingleLineImageList upcomingMovies={upcomingMovies} />
			<div className="home-flex-container" style={{display:"flex"}}>
				<ReleasedMovies
				releasedMovies={releasedMovies}
				genre={genres}
				artists={artists}/>
			</div>
        </Fragment>
    )
}
export default Home;
