import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
	console.log(action.payload);
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}