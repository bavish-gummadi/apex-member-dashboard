import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Person from './Person.js';

class People extends Component {
  constructor(props) {
    super(props);
  }
  createTable = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < 2; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 4; j++) {
        let idx = 4 * i + j;
        if (idx < this.props.members.length)
        {
          children.push(<td className="visible"><Person data={this.props.members[idx]}/></td>);
        } else {
          children.push(<td className="hidden"><Person/></td>);
        }
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }

  render(props) {
    return (
             <table className="most-width part-height centered top-gap">
               {this.createTable()}
             </table>
    )
  }
}

export default withFirebase(People)
