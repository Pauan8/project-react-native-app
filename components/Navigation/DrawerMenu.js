import React, { useState } from "react";
import "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ComicsList } from "../../pages/ComicsList";
import { ComicDetails } from "../../pages/ComicDetails";
import { Home } from "../../pages/Home";
import { GameStart } from "../../pages/Game/GameStart";

export const DrawerMenu = () => {
  //local consts
  const dimensions = useWindowDimensions();
  const [comicTitle, setComicTitle] = useState();
  const Drawer = createDrawerNavigator();

  //local function
  const ComicsListScreen = ({ navigation }) => {
    return (
      <ComicsList
        comicTitle={comicTitle}
        setComicTitle={setComicTitle}
        navigation={navigation}
      />
    );
  };

  //render
  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="ComicList"
        component={ComicsListScreen}
        options={{ title: "Marvel" }}
      />
      {comicTitle && (
        <Drawer.Screen
          name="ComicDetails"
          component={ComicDetails}
          options={{ title: `${comicTitle}` }}
        />
      )}
      <Drawer.Screen
        name="Game"
        component={GameStart}
        options={{ title: "Game" }}
      />
    </Drawer.Navigator>
  );
};
