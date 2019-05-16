import * as React from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './components/UserForm';
// export interface state1{
//   repos : any
// }
class App extends React.Component<any> {
  state: { repos: []; };
  // setState(arg0: { repos: any; }) {
  //   throw new Error("Method not implemented.");
  // }

  constructor(props:any){
    super(props);
 
  this.state = {
    repos: []
  }
}
  getUser = (e:any) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        console.log("number of repos", repos);
        // console.log("this", this.state.repos);
        this.setState({ repos });
      })
    } else return;
  }


  public render() {
    return (
     
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: <strong>{ this.state.repos }</strong></p> : <p>Please enter a username.</p> }
      </div>
       
    );
  }
}

export default App;
