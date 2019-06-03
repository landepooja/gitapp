import  React from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from 'components/UserList';
class App extends React.Component<any> {
  // setState(arg0: { repos: any; }) {
  //   throw new Error("Method not implemented.");
  // }
  state: { repos: []; };

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
        debugger;
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
        { this.state.repos ? <h3>Total number of repos: <strong style={{color: '#31c553'}}> { this.state.repos } </strong></h3> : <p>Please enter a username.</p> }
      <UserList />
     

</div>
       
    );
  }
}

export default App;
