import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.sumValue = this.sumValue.bind(this);
  }

  componentDidUpdate() {
    this.sumValue();
  }

  sumValue() {
    const { wallet } = this.props;
    const { expenses } = wallet;
    const expenseArray = expenses.map((expense) => {
      const { currency } = expense;
      const { value } = expense;
      let expenseRate = expense.exchangeRates[currency].ask;
      if (expense.currency === 'BTC') {
        expenseRate = expenseRate.split('')
          .filter((carac) => carac !== '.').join('');
      }
      console.log(expense);
      return ({
        value,
        multiplier: expenseRate,
      });
    });
    return expenseArray
      .reduce((total, obj) => (total + Number(obj.value)
         * Number(obj.multiplier)), 0).toFixed(2);
  }

  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <div id="wallet-container">
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">
            {
              `Total: ${this.sumValue()} BRL`
            }
          </h2>
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}
Wallet.propTypes = {
  user: PropTypes.objectOf().isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.shape({
      map: PropTypes.func,
    }),
  }).isRequired,
};
const mapStateToProps = (state) => ({
  ...state,
  email: state.user.payload,
});
export default connect(mapStateToProps)(Wallet);
