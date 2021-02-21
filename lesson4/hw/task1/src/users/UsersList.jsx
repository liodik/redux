import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends Component {
  render() {
    const { users, currentPage, goNext, goPrev } = this.props;
    const itemsPerPage = 3;
    const start = (currentPage - 1) * itemsPerPage;
    const usersToDispaly = users.slice(start, start + itemsPerPage);

    return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToDispaly.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}
const mapState = state => {
  return { users: state.users.usersList, currentPage: state.users.currentPage };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const Users = connector(UsersList);

export default Users;
