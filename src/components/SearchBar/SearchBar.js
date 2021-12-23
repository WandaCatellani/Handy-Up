import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import colors from '../../constants/colors';

export default function SearchBar() {
  return (
    <View style={styles.screen}>
      <View>
        <FontAwesome name='search' color={'#a8dadc'} size={24} />
      </View>

      <View style={styles.text}>
        <Text>SearchBar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    color: colors.white,
  },

  text: {
    color: colors.accent,
  },
});
