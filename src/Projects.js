import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Project from './Project.js';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
    // this.createDeck = this.createDeck.bind(this);
  }
  createTable = (start) => {
    let table = [];
    let children = [];

    // Outer loop to create parent
    for (let i = 0; i < 2; i++) {
      let idx = (start * 3) + i;
      let itemKey = "member-" + idx;
      if (idx < this.props.projects.length) {
        children.push(<td key={itemKey} className="visible"><Project/></td>);
      } else {
        children.push(<td key={itemKey} className="hidden"><Project/></td>);
      }
      table.push(<tr key="project-row">{children}</tr>);
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

export default withFirebase(Projects)
