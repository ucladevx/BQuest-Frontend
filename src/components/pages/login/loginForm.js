import React from 'react';
import { Input, InputGroupAddon, InputGroup } from 'reactstrap';
import Button from '../../util/Button';

class LoginForm extends React.Component {

	handleKeyDown = (event) => {
		let key = event.key || event.keyIdentifier || event.keyCode;
		if (key.toString().toLowerCase() === 'enter' || +key === 13) {
			this._login();
			event.preventDefault();
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _login = () => {
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        return(
            <div>
                <div className="login-form">
                    <InputGroup>
                        <Input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                        <InputGroupAddon>@g.ucla.edu</InputGroupAddon>
                    </InputGroup>
                    <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
                </div>
                <Button color="primary" onClick={this._login} block>Login</Button>
            </div>
        );
    }
}

export default LoginForm;
