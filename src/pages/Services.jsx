import React from 'react'
import Base from '../components/Base'
import userContext from "../context/userContext"
function Services() {
  return (
    <userContext.Consumer>
      {(object)=>(
        <Base>
        <h1> this is services page. {object.user.data.name}</h1>
        </Base>
      )
      }
    </userContext.Consumer>
  )
}

export default Services;