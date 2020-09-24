import React from 'react';

class Hello extends React.Component {
  constructor()
  {
    super();

    this.state = {
     data :
     [
       {
        "rno":1001,
        "sname":"xyz",
        "branch":"cs",
        "fees":45000
       },

        {
        "rno":1002,
        "sname":"abc",
        "branch":"IT",
        "fees":45000
       }
     ]

    }
  }


  render() {
    return (
      <div className="shopping-list">
        <h1>Hello World</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>

        <table>
        <tbody>
         {this.state.data.map((p,i) => <TableRow key={i} data={p} />)}


        </tbody>


        </table>
      </div>
    );
  }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.rno}</td>
            <td>{this.props.data.sname}</td>
            <td>{this.props.data.branch}</td>
            <td>{this.props.data.fees}</td>
         </tr>
      );
   }
}

export default Hello;