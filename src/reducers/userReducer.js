const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: action.user
      }

      // return Object.assign({}, state, {
      //   user: action.user
      // })

    default:
      return state
  }
}

export default userReducer
