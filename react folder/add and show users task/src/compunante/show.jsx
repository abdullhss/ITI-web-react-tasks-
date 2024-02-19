import React from 'react';

const ShowData = ({ users }) => {
  return (
    <div>
      <h2>Show Data</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowData;
