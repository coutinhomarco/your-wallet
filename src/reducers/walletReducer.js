// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {

  currencies: [],
  expenses: [],

};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};
export default walletReducer;
