import React, { Component } from 'react';
import { withFirebase } from './Firebase';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
         <div className="search-box">
              <div className="inner">
                   <form action="submit" method="get" acceptCharset="utf-8">
                        <input type="text" placeholder="Search" name="q" /><button type="submit">SEARCH</button>
                   </form>
              </div>
         </div>
    )
  }
}

export default withFirebase(SearchBar)
