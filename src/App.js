import React from 'react';
import './scss/style.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import NewsContainer from './containers/NewsContainer';

function App(){
  return(
    <div>
      <Header />
      <Nav />
      <NewsContainer/>
    </div>
  )
}

export default App;