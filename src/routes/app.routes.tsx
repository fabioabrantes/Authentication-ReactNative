import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../pages/Dashboard';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
};

export {AppRoutes};
