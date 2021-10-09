import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import { useDispatch } from 'react-redux'



import {firebase} from '../components/firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../components/actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../components/actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  useEffect(() => {

    firebase.auth().onAuthStateChanged( async (user) => {
      if ( user?.uid) {
        dispatch ( login(user.uid, user.displayName ));

        dispatch( startLoadingNotes(user.uid) ); 

        setIsLoggedIn( true);
      } else {
        setIsLoggedIn( false )
      }
      
      setChecking(false);

    })
  }, [ dispatch,setChecking,setIsLoggedIn ])

    if ( checking ) {
      return ( 
        <h1>Espere Por favor....</h1>
      )
    }


    return (
         <Router>
      <div>

        <Switch>
          <PublicRoute 
          isAuthenticated={ isLoggedIn  }
          path='/auth' 
          component={ AuthRouter }/>
          
          <PrivateRoute
           isAuthenticated={ isLoggedIn  }
           exact path='/' 
           component={ JournalScreen } />

          <Redirect to='/auth/login'/>
        </Switch>
      </div>
    </Router>
    )
}
