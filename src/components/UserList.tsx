import React, { useState, useEffect } from "react";

interface list{
    id: number,
    login: string
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => { //useEffect is going to run “effect” function after flushing changes to the DOM
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
        console.log(setUsers)
        console.log(users)
      });
  },[]); // empty array because we only run once

  return (
    <div>
         <h2>Here are some userNames :- </h2>
      {users.map(user => (
        <div key={user.id} style={{  display : 'inline-block',
        textAlign:'center'}} >
        <ul>
            <li>{user.login}</li>
        </ul>
        </div>
      ))}
    </div>
  );
}

export default UserList
