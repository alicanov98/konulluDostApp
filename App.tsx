import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import KonulluDostNavigator from './src/navigation/KonulluDostNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <KonulluDostNavigator />
    </NavigationContainer>
  );
};

export default App;


