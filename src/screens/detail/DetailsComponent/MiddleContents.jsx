import React from 'react';
import { Fragment } from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
const opts = {
	 height: '300',
	 width: '700',
	 playerVars: {
	   // https://developers.google.com/youtube/player_parameters
	   autoplay: 1,
	 },
};

const MiddleContents = (props) => {
	console.log(props.trailer.split("=")[1]);
	const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  console.log(props.state);

	return (
		<Fragment>
		<div>
				<Typography variant="h5" component="h2" gutterBottom>
					{props.movieName}
				</Typography>
			</div>

			<div>
				<Typography className="typography-text" gutterBottom>
					<b>Genre:</b> {props.genre.join(", ")}
				</Typography>
			</div>

			<div>
				<Typography className="typography-text" gutterBottom>
					<b>Duration:</b> {props.duration}
				</Typography>
			</div>

			<div>
				<Typography className="typography-text" gutterBottom>
					<b>Release Date:</b> {props.releaseDate}
				</Typography>
			</div>

			<div>
				<Typography className="typography-text" gutterBottom>
					<b>Rating:</b> {props.rating}
				</Typography>
			</div>

			<div className="plot">
				<Typography className="typography-text" gutterBottom>
					<b>Plot:</b> <a href={props.wiki} style={{textDecoration:"none"}}>(wiki)</a>{props.plot}
				</Typography>
			</div>

			<div>
				<Typography className="typography-text" gutterBottom>
					<b>Trailer:</b>
				</Typography>
			</div>
			<YouTube videoId={props.trailer.split("=")[1]} opts={opts} onReady={onReady} />
		</Fragment>
	)
}

export default MiddleContents;
