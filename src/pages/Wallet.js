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
      return ({
        value: expense.value,
        multiplier: expense.exchangeRates[currency].ask,
      });
    });
    return expenseArray
      .reduce((total, obj) => (total + Number(obj.value)
         * Number(obj.multiplier)), 0);
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
