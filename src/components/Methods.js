import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFormValue } from '../actions';

class Methods extends React.Component {
  constructor() {
    super();
    this.state = ({
      formState: {
        method: 'Dinheiro',
      },
    });
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(addFormValue(this.state));
  }

  onInputChange({ target }) {
    const { dispatch } = this.props;
    const { value } = target;
    this.setState({ formState: {
      method: value,
    } }, () => dispatch(addFormValue(this.state)));
  }

  render() {
    return (
      <label htmlFor="method">
        Método
        <select
          name="method"
          onChange={
            this.onInputChange
          }
          id="method"
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          {/* SELECTED É A PROPRIEDADE */}
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}
Methods.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect()(Methods);
