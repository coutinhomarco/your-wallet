import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFormValue } from '../actions';

class CurrenciesSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      json: [],
      formState: {
        currency: 'USD',
        tag: 'Alimentação',
      },
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addFormValue(this.state));
  }

  render() {
    const { json, onChange } = this.props;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ onChange }
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
            onChange={ onChange }
            name="tag"
            id="tag-input"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  json: state.wallet.currencies,
});

export default connect(mapStateToProps)(CurrenciesSelect);
CurrenciesSelect.propTypes = {
  dispatch: PropTypes.func.isRequired,
  json: PropTypes.arrayOf().isRequired,
  onChange: PropTypes.func.isRequired,
};
