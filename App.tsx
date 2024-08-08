import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListViewScreen from './src/screens/ListViewScreen';
import DetailsViewScreen from './src/screens/DetailsViewScreen';
import { RootStackParamList } from './src/types/root';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListView" component={ListViewScreen} />
        <Stack.Screen name="DetailsView" component={DetailsViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;