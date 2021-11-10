import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Colors from '../../constants/colors';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value) => {
    setTextValue(value);
  };

  const handleAddItem = () => {
    const item = {
      value: textValue,
      id: Math.random().toString(),
    };
    setItemList([...itemList, item]);
    setTextValue('');
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
          value={textValue}
        />

        <Button title='ADD' onPress={handleAddItem} />
      </View>

      <View style={styles.items}>
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <View style={styles.item} key={data.item.id}>
              <Text>{data.item.value}</Text>

              <Button
                title='X'
                onPress={() => handleRemoveItem(data.item.id)}
              />
            </View>
          )}
        />
      </View>

      <Modal
        style={styles.modalContainer}
        visible={modalVisible}
        animationType='slide'
      >
        <View style={styles.contentModal}>
          <View>
            <Text style={styles.textModal}>¿Está seguro que desea borrar?</Text>
          </View>

          <View>
            <Text style={styles.valueStyle}>{itemSelected.value}</Text>
          </View>
        </View>

        <View>
          <Button title='CONFIRMAR' onPress={handleRemoveConfirm} />
        </View>
      </Modal>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    // backgroundColor: '#05E895',
  },
  textInput: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: '#ececec',
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.black,
    borderWidth: 1,
    width: 250,
  },
  modalContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    // padding: 60,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // height: '100%',
  },
  contentModal: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primary,
    padding: 40,
  },
  textModal: {
    color: Colors.black,
    fontSize: 22,
    paddingTop: 10,
    paddingBottom: 10,
  },
  valueStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 28,
  },
  // btnModal: {
  //   color: Colors.primary,
  //   fontWeight: 'bold',
  //   fontSize: 28,
  // },
});
