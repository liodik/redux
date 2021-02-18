import { SET_USER, REMOVE_USER } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      return null;
    }

    default:
      return state;
  }
};

export default userReducer;
