import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import Settings from './screens/Settings';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { Provider } from 'react-native-paper';



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (

    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return <Ionicons name={route.name === "ChatList" ? "chatbubbles" : "settings"} color={color} size={size} />
      }
    })} >
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>

  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Provider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabsNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component="Chat" />
        <Stack.Screen name="SignUp" component="SignUp" />
        <Stack.Screen name="SignIn" component="SignIn" />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
