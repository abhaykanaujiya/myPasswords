import {USER_NAME, PASSWORD, PHONE_NUMBER} from '../constans/Types';
const INITIAL_STATE = {
  form: {
    username: '',
    password: '',
    phone: '',
  },
};
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
export default Auth;
