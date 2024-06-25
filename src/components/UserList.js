import React from 'react'

function UserList({users}) {
  return (
    <div>
        {users.map((el)=><h1>{el.id},{el.name},{el.username},{el.email},{el.name}</h1>
    )}
    </div>
    
  )
}

export default UserList