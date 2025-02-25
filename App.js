import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerMenu } from "./components/Navigation/DrawerMenu";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
};

export default App;
