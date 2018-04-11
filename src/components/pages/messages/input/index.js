import React from 'react';

class Input extends React.Component {
	state = {value: ''};

	handleChange = (event) => {
		this.setState({value: event.target.value});
	}

	handleSubmit = (event) => {
		if (this.state.value != '') {
			this.props.sendMessage(this.state.value);
			this.setState({value: ''});
		} 
		event.preventDefault();
	}

    render() {
        return (
        	<div>
	        	<form className="input" onSubmit={this.handleSubmit}>
	    			<input className="inputText" type="text" value={this.state.value} onChange={this.handleChange} />
	    			<div className={this.state.value ? "send" : "noMessage"} onClick={this.handleSubmit}>
	    				<i className="fa fa-paper-plane"></i>
	    			</div>
	        	</form>
	        </div>
        );
    }
}

export default Input;
