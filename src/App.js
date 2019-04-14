import React from 'react';
import { Route } from 'react-router-dom'
import { Home } from './Home';
import { Profile } from './Profile';
import { Nav } from './Nav';
import Auth from './Auth';
import { CallBack } from './CallBack';

const auth = new Auth();

const  App  = () =>  {

    return (
      <React.Fragment>
        <Nav />
          <main>
            <Route path='/' exact render={props => <Home auth={auth} {...props}/>}></Route>
            <Route path='/profile' exact component={Profile}></Route>
            <Route path='/callback' exact render={props => <CallBack auth={auth} {...props}/>}></Route>
          </main>
       </React.Fragment>
    );
  }


export default App;