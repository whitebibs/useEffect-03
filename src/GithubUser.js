import React, { useState, useEffect } from 'react';

export function GithubUser ( {username} ) {
  const [user, setUser] = useState({});

  useEffect(() => {
   async function fetchUser(){
    const response = await fetch (`https://api.github.com/users/${username}`)
    const data= await response.json();
    setUser(data)
  }
  fetchUser()
  },[username] )
  return (
    <div>
      <p>Username: {user.login}</p>
      <p>Name: {user.name}</p>
    </div>
  )
  }
