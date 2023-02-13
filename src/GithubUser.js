import React, { useState, useEffect } from 'react';

export function GithubUser ( {username} ) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  async function fetchData(username) {
    try{
      const response = await fetch (`https://api.github.com/users/${username}`.);
      const data= await response.json();
      setUser(data);
      }catch(error){
     setError(error)
      }
    }

  useEffect(() => {
    fetchData(username);
  }, [username])
  return (
    <div>
      <p>Username: {user.login}</p>
      <p>Name: {user.name}</p>
      {error && <h5>{error.message}</h5>}
    </div>
  )
  }


