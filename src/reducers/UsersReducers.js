import { USERS_SET } from '../constants/types'

const initialState = {
	users: []
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case USERS_SET:
			return {
				...state,
				users: payload
			}
		default:
			return state
	}
}
