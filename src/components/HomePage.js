import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDataFromApi } from '../actions'

// <a href="/about" ><button>ffM/button></a>

const HomePage = (props) => (
  <div>
    <h1>This is the homepage, {props.email}</h1>
    <button onClick={() => props.dispatch(fetchDataFromApi())}>Fetch data</button>
    <Link to="/about">
      <button>Go to the about page</button>
    </Link>
  </div>
)

const mapStateToProps = state => ({
  email: state.userReducer.user.email
})

export default connect(mapStateToProps)(HomePage)
