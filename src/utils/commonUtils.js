import AsyncStorage from '@react-native-async-storage/async-storage';

// set items to async storage
export const setAsyncStorageItems = async (key, payload) => {
  // console.log(key, payload, 'key,payload');
  return await AsyncStorage.setItem(key, JSON.stringify(payload));
};

// get items from async storage
export const getAsyncStorageItems = async key => {
  // // try {
  const result = await AsyncStorage.getItem(key);
  return JSON.parse(result);
  // //JSON.parse(result);

  // // } catch (error) {
  // //   console.log(error.message);
  // // }
};

export const ErrorAlerts = () => {
  setTimeout(() => {
    alert('details are saved successfully');
  }, 500);
};

export const STORAGE_KEY = 'saveUsersDetails';

export const PASSWORD_STORAGE_KEY = 'savePasswords';
