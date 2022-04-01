import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export const Form = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.lable}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={newText => props.handleSource(newText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '100%',
    marginVertical: 10,
  },
});
