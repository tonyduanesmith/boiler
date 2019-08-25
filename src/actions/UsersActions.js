import { USERS_SET } from '../constants/types'

export const UsersSet = () => dispatch => {
	dispatch({
		type: USERS_SET,
		payload: ['tony', 'emma']
	})
}
