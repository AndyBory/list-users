import React, { Component } from 'react';
import Button from '../Button';

class UsersList extends Component {
  state = {
    users: [
      {id: 1, name: 'Ivan', surName: 'Ivanov', likes: 0, isLike: false,},
      {id: 2, name: 'Petro', surName: 'Petrov', likes: 5, isLike: false,},
      {id: 3, name: 'Taras', surName: 'Tarasov', likes: 12, isLike: false,},
    ],
  };

  likeUser = (userId) => {
    this.setState ({
      users: this.state.users.map((user) => {
        return {
          ...user,
          isLike: userId === user.id ? true : user.isLike,
          likes: userId === user.id ? user.likes + 1 : user.likes,
        };
      }),
    });
  };

  removeUser = (userId) => {
    this.setState({
      users: this.state.users.filter((user) => userId !== user.id),
    });
  };

  mapUsers = (user) => (
    <li  key={user.id}> <Button
    {...user} likeUser={this.likeUser} removeUser={this.removeUser}/>
    </li>
  );

  render() {
    const { users } = this.state;
    return (
    <div>
      <h1>Users list:</h1>
      <ul>{users.map(this.mapUsers)}</ul>
    </div>
    );
  }
}

export default UsersList;