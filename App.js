import * as React from "react";
import { useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider, DefaultTheme } from "react-native-paper";
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";

import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import Chat from "./screens/Chat";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";





const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/graphql',
  cache: new InMemoryCache(),
});


const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignIn")

    }
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={route.name === "ChatList" ? "chatbubbles" : "settings"}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2196f3",
    accent: "#e91e63",
  },
};

const App = () => {
  return (
    <ApolloProvider client={client} >
      <NavigationContainer>

        <Provider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={TabsNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ presentation: "fullScreenModal" }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ presentation: "fullScreenModal" }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer >
    </ApolloProvider>

  );
};

AppRegistry.registerComponent('Chat', () => App);

export default App;




