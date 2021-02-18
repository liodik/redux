import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case DELETE_USER: {
      const newUsersList = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: newUsersList,
      };
    }
    case UPDATE_USER: {
      const newUsersList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: newUsersList,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
