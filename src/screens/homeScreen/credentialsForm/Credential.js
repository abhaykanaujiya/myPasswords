import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Form} from '../../../components/formsInput/Form';
import {Validation} from './Validation';
import {
  setAsyncStorageItems,
  PASSWORD_STORAGE_KEY,
  STORAGE_KEY,
  getAsyncStorageItems,
} from '../../../utils/commonUtils';

const SavePasswords = ({navigation}) => {
  const [sourceName, setSourceName] = useState('');
  const [sourcePassword, setSourcePassword] = useState('');
  const [confirmSourcePassword, setConfirmSourcePassword] = useState('');
  // const [copy, setCopy] = useState([]);
  const [isvalid, setIsValid] = useState(false);
  const [errors, setError] = useState({type: '', msg: '', status: false});
  const [loggedInUserId, setLoggedInUserId] = useState();

  useEffect(() => {
    getLoggedIn();
  }, []);

  const handleSourceName = newText => {
    setSourceName(newText);
  };
  const handleSourcePassword = newPassword => {
    setSourcePassword(newPassword);
  };
  const handleConfirmSourcePassword = confirmPassword => {
    setConfirmSourcePassword(confirmPassword);
  };

  const getLoggedIn = async () => {
    const keyData = await getAsyncStorageItems('loginUser');
    console.log(keyData, 'keyData');
    if (keyData !== null) {
      setLoggedInUserId(keyData);
    }
    console.log(setLoggedInUserId);
  };

  const handleSave = async () => {

   
    const validated = Validation(
      sourceName,
      sourcePassword,
      confirmSourcePassword,
    );

    if (!validated?.status) {
      setError(validated);
    } else {
      setError({ type: '', msg: '', status: true });
      const keyData = await getAsyncStorageItems('loginUser');
      setLoggedInUserId(keyData);
      const response = await getAsyncStorageItems(PASSWORD_STORAGE_KEY);
       const obj = {
         loggedInUserId,
         sourceName,
         sourcePassword,
         confirmSourcePassword,
       };
      if (response !== null && keyData !== null) {
        
        
        console.log(response, 'resss');
        const updateData = [...response, obj];
        await setAsyncStorageItems(PASSWORD_STORAGE_KEY, updateData);
        navigation.push('viewCredentials');
      } else {
        const list = [obj];
        await setAsyncStorageItems(PASSWORD_STORAGE_KEY, list);

        navigation.push('viewCredentials');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Form
        lable={'Source Name'}
        value={sourceName}
        placeholder={'Enter url or source name'}
        handleSource={handleSourceName}
      />
      {!errors.status && errors.type === 'sourceName' && (
        <Text style={styles.errorMsg}>{errors.msg}</Text>
      )}
      <Form
        lable={'Source Password'}
        value={sourcePassword}
        placeholder={'Enter the password'}
        secureTextEntry={true}
        handleSource={handleSourcePassword}
      />
      {!errors.status && errors.type === 'sourcePassword' && (
        <Text style={styles.errorMsg}>{errors.msg}</Text>
      )}
      <Form
        lable={'confirm Source password'}
        value={confirmSourcePassword}
        placeholder={'Confirm your password'}
        secureTextEntry={true}
        handleSource={handleConfirmSourcePassword}
      />
      {!errors.status && errors.type === 'confirmSourcePassword' && (
        <Text style={styles.errorMsg}>{errors.msg}</Text>
      )}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text} onPress={handleSave}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SavePasswords;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 8,
    marginVertical: 15,
  },
  // container: {
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // backgroundColor: 'white',
  //   // borderRadius: 5,
  //   // padding: 15,
  //   flex: 1,
  //   height: '100%',
  //   justifyContent: 'center',
  //   backgroundColor: '#d3d3d3',
  //   padding: 5,
  // },
  text: {
    textAlign: 'center',
  },
  confirmPassword: {
    color: 'green',
  },
  errorMsg: {
    color: 'red',
  },
});
