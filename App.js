import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavigationRouter from './src/routers/NavigationRouter';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationRouter />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    // padding: 5,
  },
});

export default App;
