import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import CameraComponent from '../CameraComponent/CameraComponent';
import LocationComponent from '../LocationComponent/LocationComponent';

export default class SwitchComponent extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          path: null,
        };
      }
      
      pathSetter() {
            this.setState({ path: true })
      }
    
    
      renderCam() {
        return (
            <CameraComponent  />
        );
      }
    
      renderLocation() {
        return (
          <LocationComponent />
        //  <View>
        // <LocationComponent />
        // <TouchableHighlight
        //     onPress={this.pathSetter.bind(this)}
        //     underlayColor="rgba(255, 255, 255, 0.5)"
        //   ></TouchableHighlight>
        //   </View>
        );
      }
    
      render() {
        console.log(this.state.path);
        return (
          <View style={styles.container} >
            {this.state.path ? this.renderCam() : this.renderLocation()}
          </View>
        );
      }
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }}
);
   
  
AppRegistry.registerComponent('SwitchComponent',()=>SwitchComponent);