import React from 'react';
import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import AlbumDetail from './src/components/AlbumDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AlbumScreen} 
        options={{
          title:AlbumDetail.AlbumTitle,
          headerTitleStyle:{
            fontaWeight:"400",
            fontSize:20
          },
        }}/>
        <Stack.Screen name="Messenger" component={DetailScreen}
        options={({route})=>({
          title:route.params.title,
          headerStyle:{
            backgroundColor:"#4F9DEB",
          },
          headerTintColor:"#fff",
          headerTitleStyle:{
            fontSize:20,
            fontaWeight:"400"
          },
        })}
        />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;