import React from 'react'

const Homepage = (props) => {
    return (
        <div>
            <h1>Users Printed from API</h1>
            {props.users.map((user) => {
                return <div key={user.id}>
                    <h2>{user.username}</h2>
                    {props.posts
                    .filter((post) => post.user_id === user.id)
                        .map((post) => (
                            <div key={post.id}>
                                <h4>Title: {post.title}</h4>
                            </div>
                        ))
                    }
                </div>
            })}
        </div>
    )
}

export default Homepage