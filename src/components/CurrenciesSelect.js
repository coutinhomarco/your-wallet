import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFormValue } from '../actions';

class CurrenciesSelect extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      json: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
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

  fetchAPI() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json()).then((json) => this.setState({
        json,
      }));
  }

  render() {
    const { json } = this.state;
    const { form } = this.props;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ this.onInputChange }
            name="currency"
            id="currency"
            data-testid="currency-input"
          >
            {
              json && Object.keys(json)
                .filter((coin) => coin !== 'USDT').map((currency, key) => (
                  <option key={ key } value={ currency }>
                    {currency}
                  </option>))
            }
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria
          <select
            onChange={ this.onInputChange }
            name="tag"
            id="tag-input"
            data-testid="tag-input"
          >
            <option value="alimentacao">Alimentação</option>
            {/* SELECTED */}
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}
export default connect()(CurrenciesSelect);
CurrenciesSelect.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
