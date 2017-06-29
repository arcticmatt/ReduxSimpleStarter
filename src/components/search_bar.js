import React, { Component } from 'react'

// Class component vs. Function component
// This is a class component
class SearchBar extends Component {
  // Note: functional components don't have state
  constructor(props) {
    super(props);

    this.state = { term: 'yoyoyo' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value})} />
      </div>
    );
  }
}

export default SearchBar;
