import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';
import React from 'react';

const ModalComponent = ({
  modalVisible,
  itemSelected,
  handleRemoveConfirm,
}) => {
  return (
    <Modal
      style={styles.modalContainer}
      visible={modalVisible}
      animationType='fade'
      transparent={true}
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
  );
};

const styles = StyleSheet.create({
  contentModal: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primary,
    padding: 40,
  },
  textModal: {
    color: Colors.black,
    fontSize: 22,
    paddingVertical: 10,
  },
  valueStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 28,
  },
});

export default ModalComponent;
