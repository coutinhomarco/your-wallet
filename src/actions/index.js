// ADICIONA EMAIL AO ESTADO GLOBAL
export const ADD_EMAIL = 'ADD_EMAIL';
export const addEmail = (payload) => ({
  type: ADD_EMAIL,
  payload,
});

// ACTIONS DA REQUISIÇÃO
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

// GERENCIA ESTADO DO FORM
export const ADD_FORM_VALUE = 'ADD_FORM_VALUE';
export const addFormValue = (payload) => ({
  type: ADD_FORM_VALUE,
  payload,
});

// JUNTA ESTADO FORM COM REQUISIÇÃO

export const addExpense = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((currencies) => {
    const newStateObject = {
      currencies,
    };
    dispatch(receiveCurrencies(newStateObject));
  });
