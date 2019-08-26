import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Button from 'react-bootstrap/Button';

class PageNav extends Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
  }

  createTable = (itemsPerPage) => {
    let table = [];
    let pages = Math.ceil(this.props.queryList.length/itemsPerPage);
    let children = [];

    if (this.props.page > 0) {
      children.push(<td key="prev"><Button variant="outline-light" onClick={(e) => this.props.setPage(this.props.page - 1)}>&#60;</Button></td>);
    } else {
      children.push(<td key="prev"><Button variant="outline-light" disabled onClick={(e) => this.props.setPage(this.props.page - 1)}>&#60;</Button></td>);
    }

    // Outer loop to create parent
    for (let i = 0; i < pages; i++) {
      let itemKey = "member-" + i;
      if (i === this.props.page) {
        children.push(<td key={itemKey}><Button variant="dark">{i + 1}</Button></td>);
      }
      else if ((i === this.props.page + 4 && i !== pages - 1) || (i === this.props.page - 4 && i !== 0)) {
        children.push(<td key={itemKey}><Button variant="outline-light" disabled>...</Button></td>);
      }
      else if (i === 0 || i === pages - 1) {
        children.push(<td key={itemKey}><Button variant="outline-light" onClick={(e) => this.props.setPage(i)}>{i + 1}</Button></td>);
      }
      else if (i < this.props.page + 4 && i > this.props.page - 4) {
        children.push(<td key={itemKey}><Button variant="outline-light" onClick={(e) => this.props.setPage(i)}>{i + 1}</Button></td>);
      }
      //Create the parent and add the children
    }
    if (this.props.page < pages - 1) {
        children.push(<td key="next"><Button variant="outline-light" onClick={(e) => this.props.setPage(this.props.page + 1)}>&#62;</Button></td>);
    } else {
        children.push(<td key="next"><Button variant="outline-light" disabled onClick={(e) => this.props.setPage(this.props.page + 1)}>&#62;</Button></td>);
    }

    table.push(<tr key="page-nav">{children}</tr>)
    return table
  }

  render(props) {
    return (
      <table className="most-width centered top-fluff">
        <tbody key="page-nav-table">
          {this.createTable(this.props.itemsPerPage)}
        </tbody>
      </table>
    )
  }
}

export default withFirebase(PageNav)
