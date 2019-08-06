
import React, { Component } from 'react';

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			value:''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({value:event.target.value});
	}
	handleSubmit(event){
		console.log(this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="提交" />
			</form>
		);
	}
}

export default NameForm;