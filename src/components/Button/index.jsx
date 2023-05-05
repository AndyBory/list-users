import React, { Component } from "react";

class Button extends Component {

  render() {
    const { id, name, surName, likes, likeUser, isLike, removeUser } = this.props;
    return (
      <div>
        <p>
          {name} {surName} Likes: {likes}
        </p>
        <button onClick={() => likeUser(id)} disabled={isLike}>Like</button>
        <button onClick={() => removeUser(id)}>Remove user</button>
      </div>
    );
  }
}

export default Button;