import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// The Styled div for sub-heading
export const SubHeading = styled.div`
    background-color: #FF9999;
    padding: 8px;
    text-align: center;
    font-size: 1rem;
`
// Styled button for BookNow button in header
export const BookNowButton = styled(Button)`
    float: right;
    position: absolute;
    right: 100px;
    bottom: 45px;
`
// Container that contains image list of released movies
// displayedd on the home component
export const LeftContainer = styled.div`
	width: 76%;
`

// Container that contains card displayed on home component
export const RightContainer = styled.div`
	margin-right:15px;
	width: 24%;
	padding-top: 20px;
`

// Container for modal
export const ModalContentContainer = styled.div`
	padding: 0;
	text-align: center;
`
// details page index container
export const DetailsContainer = styled.div`
	text-align:left;
`

// details page back link
export const BackLink = styled.div`
	margin: 8px auto 0 24px;
	cursor: pointer;
`
// inner container for details page
export const DetailsInnerContainer = styled.div`
	display: flex;
`
// div that displays left contents of the details page
export const LeftDetailsContainer = styled.div`
	width: 20%;
	text-align: center;
	margin: 16px;
`
// div that contains right content of the details page
export const RightDetailsContainer = styled.div`
	width: 20%;
	margin: 16px;
`
// div that contains middle content of the details page
export const MiddleDetailsContainer = styled.div`
	width: 60%;
	margin: 16px;
`
