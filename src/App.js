import React,{Fragment} from 'react';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import './App.css';
import ListCountry from './component/ListCountry'

function App() {
  return (
   <Fragment>
      <Provider store={store}>
         <ListCountry />
      </Provider>
   </Fragment>
  );
}

export default App;
