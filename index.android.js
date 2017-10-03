/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import CameraComponent from './app/components/CameraComponent/CameraComponent';
import LocationComponent from './app/components/LocationComponent/LocationComponent';
import SwitchComponent from './app/components/SwitchComponent/SwitchComponent';

export default class myfinal extends Component {
  render(){
    return(
      
         <CameraComponent  />
       // <LocationComponent />
        //<SwitchComponent />
    );
  }
}



AppRegistry.registerComponent('myfinal', () => myfinal);
