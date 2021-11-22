import React from 'react';
import { connect } from 'react-redux';

class CurrenciesSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      json: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json()).then((json) => this.setState({
        json,
      }));
  }

  render() {
    const { json } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" data-testid="currency-input">
            {
              json && Object.keys(json)
                .filter((coin) => coin !== 'USDT').map((currency, key) => (
                  <option key={ key } value={ currency }>
                    {currency}
                  </option>))
            }
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select name="tag" id="tag-input" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
    );
  }
}
export default connect()(CurrenciesSelect);
