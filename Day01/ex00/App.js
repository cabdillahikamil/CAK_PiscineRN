import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ModelS, Model3, ModelX, ModelY} from "./components/screens";




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        initialRouteName="ModelS"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="ModelS" component={ModelS} />
        <Drawer.Screen name="Model3" component={Model3} />
        <Drawer.Screen name="ModelX" component={ModelX} />
        <Drawer.Screen name="ModelY" component={ModelY} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

