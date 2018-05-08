import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	// Lifecycle method that runs after Component rendered for the first time
	componentDidMount () {
		this.props.fetchPosts();
	}

	render () {
		return (
			<div>
				Posts Index
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);