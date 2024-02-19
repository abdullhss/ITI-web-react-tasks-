import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, age } = this.state;
    this.props.addUser({ name, age });

    this.setState({
      name: '',
      age: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
