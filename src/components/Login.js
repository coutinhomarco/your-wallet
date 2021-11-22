import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      email: '',
      senha: '',
      isDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, senha } = this.state;
      this.validateEmailAndPassword(email, senha);
    });
  }

  // Encontrei o regex de verificiar o email nesse link: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  validateEmailAndPassword(email, senha) {
    const regex = /[\w]+@[\w]+.com/i;
    const MIN_PASSWORD_LENGTH = 6;
    const senhaArray = senha.split('');
    if (regex.test(email) && senhaArray.length >= MIN_PASSWORD_LENGTH) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { dispatch } = this.props;
    const { email, isDisabled } = this.state;
    console.log(this.props);
    return (
      <div>
        <form className="form-flex">

          <input
            data-testid="email-input"
            name="email"
            onChange={ this.onInputChange }
            placeholder="Email"
            id="email"
          />

          <input
            data-testid="password-input"
            name="senha"
            onChange={ this.onInputChange }
            placeholder="Senha"
            id="senha"
          />
          <Link to="/carteira">
            <button
              disabled={ isDisabled }
              onClick={ () => {
                dispatch(addEmail(email));
              } }
              type="button"
            >
              Entrar

            </button>

          </Link>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  ...state,
  email: state.user.payload,
});
export default connect(mapStateToProps)(Login);
