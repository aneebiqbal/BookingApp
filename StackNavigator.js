import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SavedScreen from "./screens/SavedScreen";
import { Ionicons } from "@expo/vector-icons";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import PlacesScreen from './screens/PlacesScreen';
import MapScreen from './screens/MapScreen';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
const StackNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return(
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
                <Entypo name="home" size={24} color="#003580" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={24} color="#003580" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        options={{
          tabBarLabel: "Booking",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications-circle" size={24} color="#003580" />
            ) : (
              <Ionicons
                name="notifications-circle-outline"
                size={24}
                color="black"
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#003580" />
            ) : (
              <Ionicons name="person-add-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        <Stack.Screen name="Places" component={PlacesScreen} />
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}} />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator