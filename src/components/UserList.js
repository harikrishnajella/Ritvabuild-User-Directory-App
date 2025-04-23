
import React from 'react';

function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
            <td>
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;

