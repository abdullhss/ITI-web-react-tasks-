import React, { Component } from 'react';
import './App.css';
import AddUser from './compunante/Form';
import ShowData from './compunante/show';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  addUser = (user) => {
    this.setState((prevState) => ({
      users: [...prevState.users, user],
    }));
  };

  render() {
    return (
      <div className="App">
        <AddUser addUser={this.addUser} />
        <ShowData users={this.state.users} />
      </div>
    );
  }
}

export default App;
