// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      wallet: action.payload,
    };
  default:
    return state;
  }
};
export default walletReducer;
