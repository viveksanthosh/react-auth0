import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home } from './Home';
import { Profile } from './Profile';
import { Nav } from './Nav';
class App extends Component {
  render() {
    return (
      <>
        <Nav />
          <main>
            <Route path='/' exact component={Home}></Route>
            <Route path='/profile' exact component={Profile}></Route>
          </main>
        </>
    );
  }
}

export default App;
