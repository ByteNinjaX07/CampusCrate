import React from 'react'

const Login = (props) => {

    return (
        props.isLoggedIn ? <h2>Welcome {props.username} </h2> : 
                           <h2>Please login to continue</h2>
  )
}

export default Login

