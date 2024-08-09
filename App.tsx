import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListViewScreen from "./src/screens/ListViewScreen";
import DetailsViewScreen from "./src/screens/DetailsViewScreen";
import { RootStackParamList } from "./src/types/root";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListView"
          component={ListViewScreen}
          options={{
            headerTitle: "List Items",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#00264d",
            },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
        <Stack.Screen
          name="DetailsView"
          component={DetailsViewScreen}
          options={{
            headerTitle: "Product Details",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#00264d",
            },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
