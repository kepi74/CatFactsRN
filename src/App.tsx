import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CatListContainer from './CatListContainer';
import FactDetail from './FactDetail';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CatFacts" component={CatListContainer} />
        <Stack.Screen name="Detail" component={FactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
