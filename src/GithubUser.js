import React, { useState, useEffect } from 'react';

export function GithubUser ({ username }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        try{
      const response = await fetch(`https://github.com/${username}`);
      const data = await response.json();
       console.log(setUser(data))
         } catch(error){
            console.log("error", error)
         }
    };
    fetchData();
  }, [username]);

  return (
    <div>
      <p>Username: {user.id}</p>
      <p>Name: {user.name}</p>
      
    </div>
  );
};


