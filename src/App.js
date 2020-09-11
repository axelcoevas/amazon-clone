import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import Orders from './Orders'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { auth } from './firebase'
import { useSateValue } from './StateProvider'
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51HPvReHXKGZTu1L0SwRw4WF61gMh0ve4jr07OYvzt91KcmWHwcgeuEwSJbFI3eeHU0yN84kwONnJsSQ3wbIEElwV007vtCLA0J');

function App() {
  const [{}, dispatch] = useSateValue();

  useEffect(() => {
    //  Solo correrá una vez cuando la app cargue

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">     
        <Switch>   
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
