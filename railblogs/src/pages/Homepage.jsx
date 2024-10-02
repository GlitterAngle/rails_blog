import React from 'react'

const Homepage = (props) => {
  return (
    <div>
        <h1>Users Printed from API</h1>
        {props.users.map((user)=>{
            return <div key={user.id}>
                <h2>{user.username}</h2>
            </div>
        })}
    </div>
  )
}

export default Homepage