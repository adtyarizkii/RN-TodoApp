import * as React from "react";

import { StyleSheet } from "react-native";
import Index from "./Commponent/Auth/Index";
import Login from "./Commponent/Auth/Login";
import Register from "./Commponent/Auth/Register";
import AddList from "./screen/TodoAction";
import TodoList from "./screen/TodoList";
import UpdateTodo from "./screen/UpdateTodo";
import AddCategory from "./screen/AddCategory";
import Detail from "./screen/Detail";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Icon
import { Ionicons } from "@expo/vector-icons";

// Create Variabel
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Creat Component Tab Bottom
function BotTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerMode: "screen",
        tabBarActiveTintColor: "#FF5555",

        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name == "Todo List") {
            iconName = focused ? "ios-clipboard" : "ios-clipboard-outline";
          } else if (route.name == "Add List") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name == "Add Category") {
            iconName = focused ? "list-sharp" : "list-sharp";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Todo List"
        component={TodoList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add List"
        component={AddList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add Category"
        component={AddCategory}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Tab.Screen
          name="Index"
          component={Index}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={BotTab}
          options={{
            headerMode: "screen",
            headerShown: false,
          }}
        />
        <Tab.Screen name="Update" component={UpdateTodo} />
        <Tab.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
