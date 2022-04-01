import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import Auth from '../screens/auth/Auth';
import Credential from '../screens/homeScreen/credentialsForm/Credential';
import ViewCredential from '../screens/ViewSavedDetails/ViewCredential';

const NavigationRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name="splashscreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{headerShown: false}}
          // options={{
          //   title: 'My home',
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },

          // }}
        />
        <Stack.Screen name="credential" component={Credential} />
        <Stack.Screen name="viewCredentials" component={ViewCredential} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationRouter;
