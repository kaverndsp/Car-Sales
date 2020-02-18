import React from 'react';

import {connect} from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  
  // Set up "empty" reducer and initial state 👉 Set up store and Provider 👉
  // Connect components 👉 Add events and event handlers in UI 👉 Build action creators 👉
  // write the reducer logic for the actions 👉 Rinse and repeat
 
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  
}

export default connect(mapStateToProps, {})(App);
