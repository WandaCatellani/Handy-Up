import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Card from '../../components/Cards/Cards';
import Input from '../../components/Input';
import colors from '../../constants/colors';

const Home = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmedNumber, setConfirmedNumber] = useState();

  const handleInputValue = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };

  const handleResetInput = () => setEnteredValue('');

  const handleConfirmInput = () => {
    const choseNumber = parseInt(enteredValue);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmedNumber(enteredValue);
    setEnteredValue('');
  };

  const handleStartGame = () => onStartGame(confirmedNumber);

  const confirmedOutput = confirmedNumber ? (
    <Card>
      <Text>Número seleccionado: {confirmedNumber}</Text>

      <Button
        onPress={handleStartGame}
        title='EMPEZAR JUEGO'
        color={colors.primary}
      />
    </Card>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>

        <Card style={styles.inputContainer}>
          <Text>Elija un número</Text>

          <Input
            style={{
              borderBottomColor: colors.black,
              borderBottomWidth: 1,
              width: 200,
              marginBottom: 20,
            }}
            maxLength={30}
            keyboardType='numeric'
            autoCapitalization='none'
            autoCorrect={false}
            value={enteredValue}
            onChangeText={handleInputValue}
          />

          <View style={styles.buttonContainer}>
            <Button
              title='Limpiar'
              color={colors.backgroundPrimary}
              onPress={handleResetInput}
            />

            <Button
              title='Confirmar'
              color={colors.primary}
              onPress={handleConfirmInput}
            />
          </View>
        </Card>

        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default Home;
