import React from 'react';
import './App.css';
import RouteConfig from './config/router.js'

class App extends React.Component {
  
  constructor() {
    super();
  }
  render( ) {

    return (
      <div>
       <RouteConfig />
      </div>
    );

  }

}

export default App;
