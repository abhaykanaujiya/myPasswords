import React, {useEffect} from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Logo from "../../assets/Logo.jpg"

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('auth'), 3000);
  });
  return <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
  </View>;
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent:"center"
  },
  logo: {
    height: 400,
    width:300 ,
    
    
  }
});
