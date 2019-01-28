/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import HelloWorldScreen from './src/HelloWorldScreen';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  HelloWorld: {screen: HelloWorldScreen},
});

const App = createAppContainer(AppNavigator);

export default App;
