import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

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
    const expenseArray = expenses.map((expense) => expense.value);
    return expenseArray.reduce((total, value) => total + Number(value), 0);
  }

  render() {
    const { user, wallet } = this.props;
    const { email } = user;
    const { expenses } = wallet;
    return (
      <div>
        <header>
          <img alt="teste" />
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">
            {
              this.sumValue()
            }
            <span data-testid="header-currency-field">BRL</span>
          </h2>
        </header>
        <Form />
      </div>
    );
  }
}
Wallet.propTypes = {
  user: PropTypes.objectOf({
    email: PropTypes.object.isRequired,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  ...state,
  email: state.user.payload,
});
export default connect(mapStateToProps)(Wallet);
