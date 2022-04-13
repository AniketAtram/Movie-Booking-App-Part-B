import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Modal from 'react-modal';
import { ModalContentContainer } from '../../common/StyledContainers/Containers';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import logo from '../../assets/logo.svg';
import './Header.css';

// custom style for modal
const modalCustomStyles = {
		content:{
			top:'50%',
			right: 'auto',
			bottom: 'auto',
			left: '50%',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)'
		}
}




function Header(props) {

	// Let's store some local username and values to perform validations
	localStorage.setItem("username", "admin");
	localStorage.setItem("password", "admin");
	localStorage.setItem("isLoggedIn", false);

	const[showBookNow, setShowBookNow] = useState(props.showBookButton);
	const[userLogin, setUserLogin] = useState(false);
	const[modalOpen, setModalOpen] = useState(false);
	const[userName, setUsername] = useState("");
	const[userPassword, setPassword] = useState("");
	const[userFirstname, setFirstname] = useState("");
	const[userLastName, setLastName] = useState("");
	const[userContact, setContact] = useState("");
	const[openedTab, setOpenedTab] = useState(0);
	const[displayProperty, setDisplayPropperty] = useState("block");

	const loginHandler = () => {
		userLogin? setUserLogin(false):setModalOpen(true);
	}

	const closeModal = () => {
		setModalOpen(false);
	}

	const tabSwitchHandler = (event, value) => {
		const currentTab = { value };
		setOpenedTab(currentTab.value);
		// console.log(currentTab.value);
	}

	const formInputChangeHandler = (event) => {
		const val = event.target.value;
		const key = event.target.name;
		// console.log(key + ": " + val);
		if (key === "username"){
			val ===""? setDisplayPropperty("block"):setDisplayPropperty("none");
			setUsername(val);
		}
		else if(key === "password"){
			val ===""? setDisplayPropperty("block"):setDisplayPropperty("none");
			setPassword(val);
		}
		// val ===""? setDisplayPropperty("block"):setDisplayPropperty("none");
	}

	const userLoginHandler = () =>{
		const user = localStorage.getItem("username");
		const pass = localStorage.getItem("password");

		if (userName === user && userPassword === pass) {
			setUserLogin(true);
			setModalOpen(false);
		}
		else {
			alert("Incorrect credentials please try again!");
		}
	}

    return (
        <Fragment>
            <header className="header-container">
                <img src={logo} alt="website-logo" className="logo-image"
                key="logo" />

				{
					userLogin?
					<div className="login-btn">
						<Button variant="contained" color="default" onClick={loginHandler}>Logout</Button>
					</div>:
					<div className="login-btn">
						<Button variant="contained" color="default" onClick={loginHandler}>Login</Button>
					</div>
				}


				{
					showBookNow && userLogin ?
					<div className="login-btn book-now">
						<Button variant="contained" color="primary">Book Now</Button>
					</div>
					:""
				}
            </header>
			<Modal
			 ariaHideApp={false}
			 isOpen={modalOpen}
			 contentLabel={"Login"}
			 style={modalCustomStyles}
			 onRequestClose={closeModal}
			>
				<Tabs value={openedTab} onChange={tabSwitchHandler}>
					<Tab label="Login" />
					<Tab label="Register"/>
				</Tabs>

				{
					openedTab === 0 &&
					<ModalContentContainer>
						<FormControl required>
							<InputLabel htmlFor="username">Username</InputLabel>
							<Input name="username" type="text" onChange={formInputChangeHandler}/>
							<FormHelperText>
								<span style={{color:"red", display:displayProperty}}>*Username cannot be empty</span>
							</FormHelperText>
						</FormControl>
						<br />
						<FormControl required>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input name="password" type="text" onChange={formInputChangeHandler}/>
							<FormHelperText>
								<span style={{color:"red", display:displayProperty}}>
								*Password cannot be empty
								</span>
							</FormHelperText>
						</FormControl>
						<br />
						<br />
						<Button variant="contained" color="secondary" onClick={userLoginHandler}>LOGIN</Button>
					</ModalContentContainer>
				}
				{
					openedTab === 1 &&
					<ModalContentContainer>
						<FormControl required>
							<InputLabel htmlFor="first-name">First Name</InputLabel>
							<Input name="first-name" type="text"/>
							<FormHelperText>
								<span style={{color:"red"}}>*required</span>
							</FormHelperText>
						</FormControl>
						<br />
						<FormControl required>
							<InputLabel htmlFor="last-name">Last Name</InputLabel>
							<Input name="last-name" type="text"/>
							<FormHelperText>
								<span style={{color:"red"}}>*required</span>
							</FormHelperText>
						</FormControl>
						<br />
						<FormControl required>
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input name="email" type="text"/>
							<FormHelperText>
								<span style={{color:"red"}}>*required</span>
							</FormHelperText>
						</FormControl>
						<br />
						<FormControl required>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input name="new-password" type="text"/>
							<FormHelperText>
								<span style={{color:"red"}}>*required</span>
							</FormHelperText>
						</FormControl>
						<br />
						<FormControl required>
							<InputLabel htmlFor="contact">Contact</InputLabel>
							<Input name="contact" type="text"/>
							<FormHelperText>
								<span style={{color:"red"}}>*required</span>
							</FormHelperText>
						</FormControl>
						<br />
						<br />
						<Button variant="contained" color="secondary">LOGIN</Button>
					</ModalContentContainer>
				}
			</Modal>
        </Fragment>
    )
}
export default Header;
