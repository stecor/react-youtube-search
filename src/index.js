
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//Create a new component (produce html)

 config.API_KEY;

const App = ()=>{
  return (
    <div>
    <p></p>
      <SearchBar/>
    </div>
  );
}


// take this component generate html and put on the page (DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));