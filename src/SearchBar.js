import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import logo from './images/logo.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
         <div class="search-box">
              <div class="inner">
                   <form action="submit" method="get" accept-charset="utf-8">
                        <input type="text" placeholder="Search" name="q" /><button type="submit">SEARCH</button>
                   </form>
              </div>
         </div>
    )
  }
}

export default withFirebase(SearchBar)
