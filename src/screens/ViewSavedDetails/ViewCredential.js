import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  PASSWORD_STORAGE_KEY,
  getAsyncStorageItems,
} from '../../utils/commonUtils';

const ViewPasswords = ({navigation}) => {
  const [list, setList] = useState([]);
  const [isData, setIsData] = useState(false);

  return (
    <ScrollView style={{backgroundColor: '#d3d3d3d3'}}>
      <Text style={styles.title}>Your Passwords</Text>
      {list?.map((v, index) => (
        <View style={styles.cardContainer} key={`view-${index}`}>
          {isData ? (
            <View View style={styles.card}>
              <Text>{v.sourceName}</Text>
              <Text>{v.sourcePassword}</Text>
            </View>
          ) : (
            <Text style={{textAlign: 'center', flex: 1}}>
              Credentials not found please add some...
            </Text>
          )}
        </View>
      ))}
      <TouchableOpacity style={styles.btn} onPress={handleAddNewCredential}>
        <Text style={{textAlign: 'center'}}> Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default ViewPasswords;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    borderRadius: 10,
    alignContent: 'flex-start',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
