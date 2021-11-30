import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

// import Colors from '../../constants/colors';
// import Modal from '../../components/Modal/Modal';


export default function Home() {
  const [text, setText] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value) => {
    setText(value);
  };

  const handleAddItem = () => {
    const item = {
      value: text,
      id: Math.random().toString(),
    };
    setItemList([...itemList, item]);
    setText('');
  };

  const handleRemoveItem = (id) => {
    setModalVisible(true);
    setItemSelected(itemList.find((item) => item.id === id));
  };

  const handleRemoveConfirm = () => {
    const newList = itemList.filter((item) => item.id !== itemSelected.id);
    setItemList(newList);
    setModalVisible(false);
    setItemSelected({});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Item de la lista'
          style={styles.textInput}
          onChangeText={handleChangeText}
          value={text}
          maxLength={40}
          keyboardType='numeric'
          autoCapitalize='none'
          autoCorrect={false}
        />

        <Button title='ADD ➕' onPress={handleAddItem} />
      </View>

      <View style={styles.items}>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item} key={item.id}>
              <Text>{item.value}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveItem(item.id)}
                title={'\u00D7'}
                style={styles.btnItem}
              >
                <Text>{'\u00D7'}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <Modal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleRemoveConfirm={handleRemoveConfirm}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  inputContainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    // backgroundColor: '#05E895',
  },
  textInput: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ececec',
  },
  item: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    backgroundColor: Colors.white,
  },
  btnItem: {
    color: Colors.black,
    backgroundColor: Colors.secondary,
  },
});
