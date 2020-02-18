import React from 'react';

import {connect} from "react-redux";
import {buyItem, removeFeature} from "./actions/action";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  
  // Set up "empty" reducer and initial state 👉 Set up store and Provider 👉
  // Connect components 👉 Add events and event handlers in UI 👉 Build action creators 👉
  // write the reducer logic for the actions 👉 Rinse and repeat
 console.log("This is from reducer", props);
  
  const removeFeature = item => {
    props.removeFeature(item)
  };

  const buyItem = item => {
    props.buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {buyItem, removeFeature})(App);
