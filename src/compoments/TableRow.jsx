import React from 'react'

export default function TableRow(props) {
  return (
    <tr style={props.i===1 ? {color:'green'} : {color:'orange'}}>
        <td>{props.i}</td>
        <td>{props.p.name}</td>
        <td>{props.p.win}</td>
        <td>{props.p.lose}</td>
    </tr>
  )
}
