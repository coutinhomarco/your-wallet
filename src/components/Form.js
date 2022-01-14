import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFormValue, addExpense, receiveCurrencies, addFunction } from '../actions';
import Loading from './Loading';
import CurrenciesSelect from './CurrenciesSelect';
import Methods from './Methods';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      formState: {
        value: 0,
        description: '',
      },
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.joinStates = this.joinStates.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addFormValue(this.state));
    dispatch(addExpense());
    dispatch(addFunction(this.onInputChange));
  }

  onInputChange({ target }) {
    const { dispatch } = this.props;
    const { name, value } = target;
    const { formState: oldFormState } = this.state;
    this.setState({ formState: {
      ...oldFormState,
      [name]: value,
    } }, () => dispatch(addFormValue(this.state)));
  }

  joinStates() {
    const { wallet, form, dispatch } = this.props;
    console.log(this.state);
    const newExpenses = {
      ...form,
      exchangeRates: wallet.currencies,
    };
    const newState = {
      currencies: wallet.currencies,
      expenses: [...wallet.expenses,
        {
          ...newExpenses,
        }],
    };
    newState.expenses
      .forEach((expense, index) => { expense.id = index; });
    dispatch(receiveCurrencies(newState));
    this.setState({
      formState: {
        value: 0,
      },
    });
    dispatch(addFormValue({ formState: {
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    } }));
  }

  render() {
    const { isFetching, formState } = this.state;
    const { value } = formState;
    const { form } = this.props;
    return (
      <div>
        {
          isFetching ? <Loading /> : (
            <form>
              <label htmlFor="valor">
                Valor
                <input
                  value={ value }
                  name="value"
                  onChange={ this.onInputChange }
                  id="valor"
                  type="number"
                  data-testid="value-input"
                />
              </label>
              <label htmlFor="descrip">
                Descrição
                <input
                  name="description"
                  onChange={ this.onInputChange }
                  id="descrip"
                  type="text"
                  data-testid="description-input"
                />
              </label>
              <Methods />
              <CurrenciesSelect onChange={ this.onInputChange } />
              <button onClick={ this.joinStates } type="reset">Adicionar despesa</button>
            </form>)
        }
      </div>);
  }
}
const mapStateToProps = (state) => ({
  ...state,
  ...state.wallet.payload,
});
Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.string,
    expenses: PropTypes.string,
  }).isRequired,
};
export default connect(mapStateToProps)(Form);
