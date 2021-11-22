import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import Loading from './Loading';
import CurrenciesSelect from './CurrenciesSelect';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    console.log(this.state);
    this.setState({
      [name]: value,
    });
  }

  fetchAPIThunk() {
    return ((dispatch) => (fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json()).then((json) => dispatch(addExpense(json)))));
  }

  render() {
    const { isFetching } = this.state;
    return (
      <div>
        {
          isFetching ? <Loading /> : (
            <form>
              <label htmlFor="valor">
                Valor
                <input
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
              <label htmlFor="method">
                Método
                <select
                  name="method"
                  onChange={ this.onInputChange }
                  id="method"
                  data-testid="method-input"
                >
                  <option value="dinheiro">Dinheiro</option>
                  <option value="credito">Cartão de crédito</option>
                  <option value="debito">Cartão de débito</option>
                </select>
              </label>
              <CurrenciesSelect />
              <button type="button">Adicionar despesa</button>
            </form>)
        }
      </div>);
  }
}
const mapStateToProps = (state) => ({
  ...state,
  wallet: {
    enchangeRates: state.wallet.payload,
  },
});
export default connect(mapStateToProps)(Form);
