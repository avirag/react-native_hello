import React, { Component } from 'react';
import { Button } from "react-native";

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Hello World page"
          onPress={() => navigate('HelloWorld', {name: 'Hello World'})}
        />
      );
    }
  }