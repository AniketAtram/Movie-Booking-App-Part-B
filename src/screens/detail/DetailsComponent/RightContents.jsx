import React from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  imageListItem: {
	  cursor: 'pointer',
  }
}));

const RightContents = (props) => {
	const [value, setValue] = React.useState(2);
	const classes = useStyles();
	const navigate = useNavigate();
	// console.log(props.artists);

	const wikiRedirect = (event) =>{
		const artistId = event.target.name;
		let url="";
		for (let idx in props.artists) {
			if (props.artists[idx].id === artistId) {
				url=props.artists[idx].wiki_url;
			}
		}
		window.location=url;


		// console.log(url);


	}
	return (
		<Fragment>
			<Box component="fieldset" mb={3} borderColor="transparent">
		   		<Typography component="legend">Rate this movie:</Typography>
			   		<Rating
				 		name="simple-controlled"
				 		value={value}
				 		onChange={(event, newValue) => {
				   		setValue(newValue);
				 		}}
			   		/>
 		   </Box>
		       <div className={classes.root}>
      		       <ImageList rowHeight={160} className={classes.imageList} cols={2}>
                       {props.artists!== null && props.artists.map((item) => (
                           <ImageListItem key={item.id} className={classes.imageListItem} onClick={wikiRedirect}>
                               <img src={item.profile_url} alt={item.id} name={item.id}/>
							   <ImageListItemBar title={item.first_name + " " + item.last_name} />
                           </ImageListItem>
                        ))}
                   </ImageList>
               </div>
		</Fragment>
	)
}

export default RightContents;
