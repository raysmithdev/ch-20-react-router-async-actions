import React from 'react'

const AboutPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is the aboutpage, Hello {props.match.params.name}</h1>
    </div>
  )
}

export default AboutPage
