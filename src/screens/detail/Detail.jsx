import { DetailsContainer,
		 BackLink,
		 DetailsInnerContainer,
		 LeftDetailsContainer,
		 RightDetailsContainer,
		 MiddleDetailsContainer } from '../../common/StyledContainers/Containers';

import React from 'react';
import { Fragment } from 'react';
import Header from '../../common/header/Header';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MiddleContents from './DetailsComponent/MiddleContents';
import RightContents from './DetailsComponent/RightContents';
import Typography from '@material-ui/core/Typography';
import './Detail.css';

function Detail() {
	const { state } = useLocation();
	const navigate = useNavigate();
	return (
		<Fragment>
			<DetailsContainer>
				<Header showBookButton={true}/>
				<BackLink onClick={()=> {navigate('/')}}>
					<Typography> &#60;&#60; Back To Home </Typography>
				</BackLink>
				<DetailsInnerContainer>
					<LeftDetailsContainer>
						<img src={state.imageUrl} alt="movie-poster" key="movie-poster" />
					</LeftDetailsContainer>
					<MiddleDetailsContainer>
						<MiddleContents
						movieName={state.movieName}
						genre={state.genre}
						duration={state.duration}
						releaseDate={state.releseDate}
						rating={state.rating}
						wiki={state.wiki}
						plot={state.plot}
						trailer = {state.trailer}
						/>
					</MiddleDetailsContainer>
					<RightDetailsContainer>
						<RightContents artists = {state.artist} />
					</RightDetailsContainer>
				</DetailsInnerContainer>
			</DetailsContainer>
		</Fragment>
	)
}
export default Detail;
