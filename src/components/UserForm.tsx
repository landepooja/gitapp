import React from 'react';
import { mergeStyleSets } from '@uifabric/styling';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
//npm i office-ui-fabric-react

export const getStyleSet = () => {
  return mergeStyleSets ({
        submit : {
          backgroundColor  : '#31c553',
          height : '50px',
          width: '150px'
        },

        input : {
          margin:"20px auto", 
          display:"block",
          height:"30px", 
          width:"160px"
        }
  });
}

const UserForm = (props: { getUser: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined; }) => {
  return (
    <form onSubmit={props.getUser}>
      {/* <input className={getStyleSet().input} type="text" name="username"/> */}
      <TextField className={getStyleSet().input} placeholder="Enter your username" type="text" name="username"/>
      <button className={getStyleSet().submit}><h3>Submit</h3></button>
    </form>
  );
}

export default UserForm;