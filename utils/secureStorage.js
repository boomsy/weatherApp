/* eslint-disable prettier/prettier */
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage';

const config = {
      /*
      accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: 'auth with yourself',
      service: 'storage',
      authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
      */
}


export const storeData = async (key, value) => {
      try {
            await SecureStorage.setItem(key, value);
      } catch (error) {
            console.log(' Erreur storring value : ', error)
      }
};


export const getData = async (key) => {
      try {
         const value =  await SecureStorage(key);
         return value;
      } catch (error) {
            console.log(' Erreur retrieving value : ', error)
      }
};

