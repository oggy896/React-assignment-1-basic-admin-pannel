import React, { Component } from 'react'

export default class TableRow extends Component {
  render() {
    const{data}=this.props
    return (
      <div>
        <tr class="data-row">
                        <td class="column1">{data.id}</td>
                        <td class="column2">{data.firstName}</td>
                        <td class="column3">{data.lastName}</td>
                        <td class="column4">{data.email}</td>
                        <td class="column5">{data.phone}</td>
    </tr>
      </div>
    )
  }
}

