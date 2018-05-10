import React, { Component } from 'react';
import {  Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField (field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
					{...field.input} // Wire the event handlers of Field to input
				/>
				{field.meta.error}
			</div>
		);
	}

	renderTextAreaField (field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<textarea className="form-control" rows="6" {...field.input}></textarea>
				{field.meta.error}
			</div>
		);
	}

	// Contain the action that will be aplied to form values if they are valid
	onSubmit (values) {
		console.log(values);
	}

	render () {
	const { handleSubmit } = this.props;

		return (
			<div>
				<h2>Posts New</h2>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field
						label="Post Content"
						name="content"
						component={this.renderTextAreaField}
					/>
					<button type="submit" className="btn btn-primary">Save</button>
					{/* <button className="btn btn-danger">Cancel</button> */}
				</form>
			</div>
		);
	}
}

function validate (values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Error in title!';
	}
	if (!values.categories) {
		errors.categories = 'Error in categories!';
	}
	if (!values.content) {
		errors.content = 'Error in content!';
	}

	return errors;
}

export default reduxForm({
	validate, // Defines the validation function
	form: 'PostsNewForm' // Identifies the form
})(PostsNew);