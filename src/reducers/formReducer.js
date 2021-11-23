// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_FORM_VALUE } from '../actions';

export const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'dinheiro',
  tag: 'alimentacao',
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_FORM_VALUE:
    return {
      ...state,
      ...action.payload.formState,
    };
  default:
    return state;
  }
};

export default formReducer;
