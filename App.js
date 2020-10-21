import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/src/view/screens/HomeScreen';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CourseScreen from './app/src/view/screens/CourseScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{title: null, headerStyle: {elevation: 0}}}>
        <Stack.Screen
          name="HomeSceen"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Icon name="sort" size={25} style={{marginLeft: 20}} />
            ),
            headerRight: () => (
              <Image
                style={{height: 40, width: 40, marginRight: 20}}
                source={require('./app/src/assets/person.png')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CourseScreen"
          options={({navigation}) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back-ios"
                  size={25}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Icon name="more-vert" size={25} style={{marginRight: 20}} />
            ),
          })}
          component={CourseScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
