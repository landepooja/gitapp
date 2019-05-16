import React from 'react';

const UserForm = (props: { getUser: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined; }) => {
  return (
    <form onSubmit={props.getUser}>
      <input style={{ margin:"20px auto", display:"block" }} type="text" name="username"/>
      <button>Submit</button>
    </form>
  );
}

export default UserForm;