import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFormValue } from '../actions';

class Methods extends React.Component {
  constructor() {
    super();
    this.state = ({
      formState: {
        method: 'dinheiro',
      },
    });
  }

  onInputChange({ target }) {
    const { dispatch, form } = this.props;
    const { name, value } = target;
    const { formState: oldFormState } = this.state;
    this.setState({ formState: {
      ...oldFormState,
      [name]: value,
    } }, () => dispatch(addFormValue(this.state)));
  }

  render() {
    return (
      <label htmlFor="method">
        Método
        <select
          name="method"
          onInput={ (event) => {
            this.onInputChange(event);
          } }
          id="method"
          data-testid="method-input"
        >
          <option value="dinheiro">Dinheiro</option>
          {/* SELECTED É A PROPRIEDADE */}
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}
Methods.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect()(Methods);
