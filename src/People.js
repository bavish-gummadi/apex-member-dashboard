import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Person from './Person.js';
import CardDeck from 'react-bootstrap/CardDeck';

class People extends Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
    // this.createDeck = this.createDeck.bind(this);
  }
  createTable = (start) => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < 2; i++) {
      let children = []
      let rowKey = "row-" + i;
      //Inner loop to create children
      for (let j = 0; j < 4; j++) {
        let idx = (start * 8) + (4 * i) + j;
        let itemKey = "member-" + idx;
        if (idx < this.props.members.length)
        {
          children.push(<td key={itemKey} className="visible"><Person data={this.props.members[idx]}/></td>);
        } else {
          children.push(<td key={itemKey} className="hidden"><Person/></td>);
        }
      }
      //Create the parent and add the children
      table.push(<tr key={rowKey}>{children}</tr>)
    }
    return table
  }

  // createDeck = () => {
  //   let deck = [];
  //   let children = [];
  //   // Outer loop to create parent
  //   for (let i = 0; i < this.props.members.length; i++) {
  //     children.push(<Person data={this.props.members[i]}/>);
  //   }
  //   deck.push(<CardDeck>{children}</CardDeck>)
  //   return deck
  // }

  render(props) {
    return (
      <table className="most-width part-height centered">
        <tbody key="people-table">
          {this.createTable(this.props.start)}
        </tbody>
      </table>
    )
  }
}

export default withFirebase(People)
