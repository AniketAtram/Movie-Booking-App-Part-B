import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

const useStyles = makeStyles((theme) => ({
    root: {
	    display: "flex",
	    flexWrap: "wrap",
	    justifyContent: "space-around",
	    overflow: "hidden",
	    backgroundColor: theme.palette.background.paper,
 	},
	imageList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)",
	},
    imageListImage: {
        // minheight: "250px",
		width: "100%",
    },
    title: {
        color: "#FFFFF",
    },
    titleBar: {
	    background:
	      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.5) 100%)",
    },
}));

function SingleLineImageList(props) {
	const classes = useStyles();

    return (
        <Fragment>
	        <div className={classes.root}>
		        <ImageList className={classes.imageList} rowHeight={250} cols={6} gap={4}>
		            {props.upcomingMovies.map((item) => (
		                <ImageListItem key={item.imageUrl}>
		                    <img
		                        src={item.imageUrl}
		                        alt={item.movieName}
		                        className={classes.imageListImage}
		                    />
		                    <ImageListItemBar
		                        title={item.movieName}
		                        classes={{
		                            root: classes.titleBar,
		                            title: classes.title,
		                        }}
		                    />
		                </ImageListItem>
		            ))}
		        </ImageList>
	        </div>
        </Fragment>
    );
}
export default SingleLineImageList;
