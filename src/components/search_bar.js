import React, { Component } from 'react'

// Class component vs. Function component
// This is a class component
class SearchBar extends Component {
  // Note: functional components don't have state
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
