import { SIGN_IN_URL, SIGN_UP_URL } from '../../src/constants/db';

import { Alert } from 'react-native';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

const ERROR_MESSAGE = {
  EMAIL_EXISTS: 'El email ya esta registrado',
  EMAIL_NOT_FOUND: 'El email no esta registrado',
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(SIGN_UP_URL, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } else {
      const message = data.error.message;

      const messageText =
        message in ERROR_MESSAGE
          ? ERROR_MESSAGE[message]
          : 'Intente nuevamente';

      Alert.alert('Ha ocurrido un error', messageText, [{ text: 'Ok' }]);
    }

    console.log(data);
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(SIGN_IN_URL, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: LOG_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } else {
      const message = data.error.message;

      const messageText =
        message in ERROR_MESSAGE
          ? ERROR_MESSAGE[message]
          : 'Intente nuevamente';

      Alert.alert('Ha ocurrido un error', messageText, [{ text: 'Ok' }]);
    }

    console.log(data);
  };
};
