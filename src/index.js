// Notes
// ReactDOM - interact with DOM
// React - create and manage components
// Component - function or object that returns HTML
// One component per file!
import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD-zHGq3FkbaTqgiohr7aU7P6XsP5P2h1c';

// Create a new component. This component should produce
// some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
