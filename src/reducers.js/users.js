import { GET_USERS } from '../actions/users'

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action
    default:
      return state
  }
}
