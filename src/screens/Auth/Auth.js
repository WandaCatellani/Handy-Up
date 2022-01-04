import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { logIn, signUp } from '../../../store/actions/auth.actions';

import colors from '../../constants/colors';
import { useDispatch } from 'react-redux';

// import Login from '../../components/Auth/Login';
// import Register from '../../components/Auth/Register';

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    if (isSignUp) {
      dispatch(signUp(email, password));
    } else {
      dispatch(logIn(email, password));
    }
  };

  const handleToggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>{isSignUp ? 'Registro' : 'Ingreso'}</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize='none'
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleConfirm}>
          <Text style={styles.confirmButton}>
            {isSignUp ? 'Registrate' : 'Ingresar'}
          </Text>
        </TouchableOpacity>

        <View style={styles.prompt}>
          <Text>
            {isSignUp ? '¿Ya estas registrado?' : '¿Aún no estas registrado?'}
          </Text>

          <TouchableOpacity
            style={styles.promptMessage}
            onPress={handleToggleSignUp}
          >
            <Text style={styles.promptButton}>
              {isSignUp ? 'Ingresar' : 'Registrarse'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
    textAlign: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    color: '#333',
  },
  promptButton: {
    fontSize: 16,
    color: colors.primary,
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  confirmButton: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: colors.primary,
    color: colors.black,
    paddingVertical: 10,
    borderRadius: 10,
  },
  // promptMessage: {},
});

export default Auth;
