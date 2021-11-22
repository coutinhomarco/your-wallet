import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <div>
        <header>
          <img alt="teste" />
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">
            0
            {' '}
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
