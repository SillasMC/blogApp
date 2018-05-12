import React, { Component } from 'react';
import {  Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {
	renderField (field) {
		const { meta : { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					{...field.input} // Wire the event handlers of Field to input
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderTextAreaField (field) {
		const { meta : { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<textarea className="form-control" rows="6" {...field.input}></textarea>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	// Contain the action that will be aplied to form values if they are valid
	onSubmit (values) {
		this.props.createPost(values, () => {
			this.props.history.push('/'); // Router helper that navigates to /
		});
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
					<Link className="btn btn-danger" to="/">Cancel</Link>
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
})(
	connect(null, {createPost})(PostsNew)
);