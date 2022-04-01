import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {authFormValidation} from './AuthValidation';
import {STORAGE_KEY} from '../../utils/commonUtils';
import {
  setAsyncStorageItems,
  getAsyncStorageItems,
} from '../../utils/commonUtils';
import auth from "../../assets/auth.jpg";

const Auth = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [errors, setError] = useState({type: '', msg: '', status: false});

  // const handleLogin = async () => {
  //   console.log('HELLO');

  //   if (result !== null) {
  //     console.log(result, 'inside if');
  //     result.filter(v => {
  //       if (v.userEmail === userEmail && v.password === password) {
  //         alert('login successfully');
  //       }
  //     });
  //     console.log(result, 'loginresult');
  //   }
  // };

  // const handleSignUp = async () => {
  //   authFormValidation(userEmail, password, phone, isLogin);

  //   console.log('isvalid');
  //   const response = await AsyncStorage.getItem(STORAGE_KEY);
  //   if (response !== null) {
  //     const list = JSON.parse(response);
  //     const newList = [...list, {userEmail, password, phone}];

  //     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  //   } else {
  //     const list = [{userEmail, password, phone}];
  //     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  //   }
  //   setIsLogin(true);
  //   setPassword('');
  //   setUserEmail('');
  //   setphone('');
  // };
  const getSignUpCredentials = async obj => {
    let results = await getAsyncStorageItems(STORAGE_KEY);
    console.log(typeof results, 'get ssign result');
    if (results !== null) {
      const newList = [...results, ...obj];
      console.log(newList, 'newlist');
      await setAsyncStorageItems(STORAGE_KEY, newList);
    } else {
      console.log('result not found');
      await setAsyncStorageItems(STORAGE_KEY, obj);
    }
    setIsLogin(true);
  };
  const getLoginCedential = async () => {
    const loginResponse = await getAsyncStorageItems(STORAGE_KEY);
    if (loginResponse !== null) {
      for (let i = 0; i < loginResponse.length; i++) {
        if (
          userEmail === loginResponse[i].userEmail ||
          password === loginResponse[i].password
        ) {
          setIsValid(true);
          await setAsyncStorageItems('loginUser', userEmail);
          navigation.navigate('viewCredentials');
        } else {
          console.log('incorrect login details');
        }
      }
    } else {
      setError({type: 'login', msg: 'incorrect details', status: false});
      console.log('check your details');
    }
  };

  const handleAuth = () => {
    const result = authFormValidation(userEmail, password, phone, isLogin);
    const obj = [{userEmail, password, phone}];
    console.log(result, 'jgjgjgjgjgjgg');
    if (!result?.status) {
      setError(result);
    } else {
      setError({type: '', msg: '', status: true});
      {
        !isLogin ? getSignUpCredentials(obj) : getLoginCedential();
      }
    }
  };
  const handleAuthView = () => {
    setIsLogin(!isLogin);
    setUserEmail('');
    setPassword('');
    setUserEmail('');
    setphone('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={auth} style={{width:200,height:200,marginLeft:60}} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
            color: 'black',
          }}>
          {isLogin ? ' Login' : 'SignUp'}
        </Text>
        <Text>Email</Text>
        <TextInput
          onChangeText={newText => setUserEmail(newText)}
          Value={userEmail}
          style={styles.input}
          placeholder="Enter email..."
        />
        {!errors.status && errors.type === 'userEmail' && (
          <Text style={styles.alert}>{errors.msg}</Text>
        )}

        <Text>Password</Text>
        <TextInput
          type="password"
          onChangeText={newText => setPassword(newText)}
          Value={password}
          placeholder="Enter password..."
          secureTextEntry={true}
          style={styles.input}
        />
        {!errors.status && errors.type === 'password' && (
          <Text style={styles.alert}>{errors.msg}</Text>
        )}
        {!isLogin && (
          <>
            <Text style={styles.phoneNoLable}>Phone no</Text>
            <TextInput
              type="number"
              onChangeText={newText => setphone(newText)}
              Value={phone}
              placeholder="Enter phone number..."
              secureTextEntry={false}
              style={styles.input}
            />
            {!errors.status && errors.type === 'phone' && (
              <Text style={styles.alert}>{errors.msg}</Text>
            )}
          </>
        )}

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.loginText} onPress={handleAuth}>
            {isLogin ? ' Login' : 'SignUp'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity style={styles.btn} onPress={handleAuthView}>
          <Text style={styles.loginText}>
            {!isLogin ? ' Login' : 'SignUp'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6f9ff',
    padding: 5,
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.72,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 15,
  },
  btn: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.72,

    elevation: 6,
  },
  alert: {
    color: 'red',
  },
  phoneNoLable: {
    marginTop: 10,
  },
  or: {
    textAlign: 'center',
    color: 'skyblue',
  },
});

export default Auth;
