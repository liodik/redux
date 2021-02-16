import React, { Component } from 'react';
import { UserDataContext } from './userData-context';

class UserMenu extends Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {this.context.name}</span>
        <img
          {...this.props}
          alt="User Avatar"
          src={this.context.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}
UserMenu.contextType = UserDataContext;

export default UserMenu;
