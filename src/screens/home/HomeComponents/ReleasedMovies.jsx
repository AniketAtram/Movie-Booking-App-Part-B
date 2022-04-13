import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
import { LeftContainer, RightContainer } from '../../../common/StyledContainers/Containers';
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageListItem: {
      // width: 500,
      // height: 360,
	  margin: "15px",
	  cursor: "pointer",
   },
      icon: {
      color: 'rgba(255, 255, 255, 0.54)',
   },
    formControl: {
		margin: theme.spacing(1),
		minWidth: "240px",
		maxWidth: "240px",
	}
}));


function ReleasedMovies(props) {
	const classes = useStyles();
	let navigate = useNavigate();

	const [enteredMovieName, setEnteredMovieName] = useState("");
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [selectedArtists, setSelectedArtists] = useState([]);
	const [selectedStartDate, setSelectedSatrtDate] = useState("");
	const [selectedEndDate, setSelectedEndDate] = useState("");

	const onImageClickHandler = (event) =>{
		// get the id of the movie
		const id = event.target.alt;
		// filter the data using this id
		const clickedMovie = props.releasedMovies.filter((movie) => {
			return movie.movieId === id;
		})
		// console.log(clickedMovie);
		// pass the filtered movie object to the details page for rendering
		navigate('detail/',{state:clickedMovie[0]});
	}

	const onInputChangeHandler = (event) => {
		const movieName = event.target.value;
		setEnteredMovieName(movieName);
	}

	const onItemCheckedHandler = (event) => {
		const name = event.target.name;
		if (name === "selected-genres"){
			setSelectedGenres(event.target.value);
		}
		else if (name === "selected-artists"){
			setSelectedArtists(event.target.value);
		}
		else if (name === "release-date-start"){
			let startDate = new Date(event.target.value).toDateString();
			setSelectedSatrtDate(startDate);
		}
		else if (name === "release-date-end"){
			let endDate = new Date(event.target.value).toDateString();
			setSelectedEndDate(endDate);
		}

	}

	const onApplyHandler = ()=> {
		// cannot determine the logic for this...
	}

	return (
		<Fragment>
			<LeftContainer>
				<div className={classes.root}>
					<ImageList rowHeight={360} cols={4} className={classes.imageList}>
						{props.releasedMovies.map((item) => (
							<ImageListItem key={item.imageUrl}
							 className={classes.imageListItem}
							 onClick={onImageClickHandler}
							>
								<img src={item.imageUrl} alt={item.movieId} />
								<ImageListItemBar
								  title={item.movieName}
								  subtitle={<span>{item.releseDate}</span>}
								/>
							</ImageListItem>
						))}
					</ImageList>
		        </div>
			</LeftContainer>

			<RightContainer>
				<Card raised>
					<CardContent>
						<FormControl className={classes.formControl}>
							<Typography color="primary" gutterBottom>FIND MOVIES BY</Typography>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="movie-name">Movie Name</InputLabel>
							<Input onChange={onInputChangeHandler} id="movie-name" name="movie-name"></Input>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="genre">Genres</InputLabel>
							<Select
							multiple
							input={<Input />}
							renderValue={(selected) => selected.join(",")}
							value={selectedGenres}
							onChange={onItemCheckedHandler}
							name="selected-genres"
							id="selected-genres"
							>
								<MenuItem value="">None</MenuItem>
									{
										props.genre.map((genre)=>(
											<MenuItem
											 key={genre.id}
											 value={genre.name}
											>
												<Checkbox
												 checked={selectedGenres.indexOf(genre.name) > -1}
												 />
												<ListItemText primary={genre.name} />
											</MenuItem>
										))
									}
							</Select>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="artists">Artists</InputLabel>
							<Select
							multiple
							input={<Input />}
							renderValue={(selected) => selected.join(",")}
							value={selectedArtists}
							onChange={onItemCheckedHandler}
							name="selected-artists"
							id="selected-artists"
							>
								<MenuItem value="">None</MenuItem>
									{
										props.artists.map((artist)=>(
											<MenuItem
											 key={artist.id}
											 value={`${artist.first_name} ${artist.last_name}`}
											>
												<Checkbox
												 checked={selectedArtists.indexOf(`${artist.first_name} ${artist.last_name}`) > -1}
												 />
												<ListItemText primary={`${artist.first_name} ${artist.last_name}`} />
											</MenuItem>
										))
									}
							</Select>
						</FormControl>
						<FormControl className={classes.formControl}>
							<TextField
							 label="Release Date Start"
							 type="date"
							 defaultValue=""
							 InputLabelProps={{shrink:true}}
							 name="release-date-start"
							 id="release-date-start"
							 onChange={onItemCheckedHandler}
							/>
						</FormControl>
						<FormControl className={classes.formControl}>
							<TextField
							 label="Release Date End"
							 type="date"
							 defaultValue=""
							 InputLabelProps={{shrink:true}}
							 name="release-date-end"
							 id="release-date-end"
							 onChange={onItemCheckedHandler}
							/>
						</FormControl>
						<FormControl className={classes.formControl}>
							<Button variant="contained" color="primary" onClick={onApplyHandler}>APPLY</Button>
						</FormControl>
					</CardContent>
				</Card>
			</RightContainer>
		</Fragment>
	)
}
export default ReleasedMovies;
