import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Table extends Component {
  render() {
    return (
      <table>
        <th>
          Valor convertido
        </th>
        <th>
          Descrição
        </th>
        <th>
          Moeda
        </th>
        <th>
          Moeda de conversão
        </th>
        <th>
          Categoria
        </th>
        <th>
          Tag
        </th>
        <th>
          Método de pagamento
        </th>
        <th>
          Câmbio utilizado
        </th>
        <th>
          Editar/Excluir
        </th>
      </table>
    );
  }
}

export default connect()(Table);
