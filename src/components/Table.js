import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableHeader } from './TableHeader';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <TableHeader />
        {
          expenses.length > 0 && (
            expenses.map((expense) => {
              const { currency } = expense;
              let currencyC = currency;
              let exchangeRate = expense.exchangeRates[currency].ask;
              if (expense.currency === 'USD') {
                currencyC = 'Dólar Comercial';
              }
              if (expense.currency === 'EUR') {
                currencyC = 'Euro';
              }
              if (expense.currency === 'BTC') {
                exchangeRate = exchangeRate.split('')
                  .filter((carac) => carac !== '.').join('');
              }
              return (
                <tr key>
                  <td>{expense.value}</td>
                  <td>
                    {Number(exchangeRate * expense.value).toFixed(2)}
                  </td>
                  <td>{expense.description}</td>
                  <td>{currencyC}</td>
                  <td>Real</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(exchangeRate).toFixed(2)}</td>
                </tr>);
            })
          )
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
