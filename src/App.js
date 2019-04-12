import React from 'react';
import { Route } from 'react-router-dom'
import { Home } from './Home';
import { Profile } from './Profile';
import { Nav } from './Nav';
import Auth from './Auth';

const auth = new Auth();

const  App  = () =>  {

    return (
      <>
        <Nav />
          <main>
          <Route path='/' exact render={props => <Home auth={auth} {...props}/>}></Route>
            <Route path='/profile' exact component={Profile}></Route>
          </main>
        </>
    );
  }


export default App;
