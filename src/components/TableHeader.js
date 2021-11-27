import React, { Component } from 'react';

export class TableHeader extends Component {
  render() {
    return (
      <>
        <th>
          Valor
        </th>
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
      </>
    );
  }
}

export default TableHeader;
