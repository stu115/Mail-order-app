import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Weather from './FifthPage';
import SixthPage from './SixthPage';

import {
  StackNavigator,
  //TabNavigator.
  DrawerNavigator,
  //added
  createAppContainer,
} from 'react-navigation';
//added
import { createBottomTabNavigator } from 'react-navigation-tabs';
//

//export  default class Pages extends Component{
export class Pages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SimpleAppNavigator />;
  }
}

//const SimpleAppNavigator = TabNavigator({
const SimpleAppNavigator = createBottomTabNavigator(
  {
    page1: { screen: FirstPage },
    page2: { screen: SecondPage },
    page3: { screen: ThirdPage },
    page4: { screen: FourthPage },
    page5: { screen: Weather },
    page6: { screen: SixthPage }
  },
  {
    initialRouteName: 'page1',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition: 'bottom',
  }
);

//added
export default createAppContainer(SimpleAppNavigator);
