const DUMMY_ACTION = 'DUMMY_ACTION'

// Synchronous action
const dummyAction = (payload) => {
  return {
    type: DUMMY_ACTION,
    payload
  }
}

const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}

// Async action
export const fetchDataFromApi = () => {
  return (dispatch) => {
    // Do some async stuff i.e ajax requests
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => dispatch(fetchUserSuccess(data.results[0])))
    .catch(error => console.log(error))
  }
}
