import React, { Component } from 'react'
import firebase from '../../firebase';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Register extends Component {

	state = {
		username: '',
		email: '',
		password: '',
		passwordConfirmation: '',
		errors: []
	};
	
	isFormValid = () => {
		let errors = [];
		let error; 

		if(this.isFormEmpty(this.state)) {
			// throw error
			error = { message: 'Fill in all fields' };
			this.setState({errors: errors.concat(error)});
			// [ {message: 'Fill in all fields'}, {} ]
		} else if (!this.isPasswordValid()) {
			// form valid
		} else {
			// form valid
			return true;
		}
	}

	isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
		return !username.length || !email.length || !password.length || !passwordConfirmation.length;
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	};

	handleSubmit = event => {
		if(this.isFormValid()) {
		event.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(createdUser => {
				console.log(createdUser);
			})
			.catch(err => {
				console.log(err);
			});
		}
	};

	render() {
		const {username, email, password, passwordConfirmation} = this.state;

		return (
			<Grid textAlign="center" verticalAlign="middle" className="app">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" icon color="orange" textAlign="center">
						<Icon name="puzzle piece" color="orange" />
							Regsister for DevChat
					</Header>
					<Form onSubmit={this.handleSubmit} size="large">
						<Segment stacked>
							<Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange} value={username} type="text" />
							<Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} value={email} type="text" />
							<Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange} value={password}type="password" />
							<Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation} type="password" />
							<Button color="orange" fluid size="large">Submit</Button>
						</Segment>
					</Form>
					<Message>Already a user? <Link to="/login">Login</Link></Message>
				</Grid.Column>
			</Grid>
		)
	}
}

export default Register
