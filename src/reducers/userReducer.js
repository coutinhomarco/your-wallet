// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,

      email: action.payload,

    };
  default:
    return state;
  }
};

export default userReducer;
