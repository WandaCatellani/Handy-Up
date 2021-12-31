import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/cardContainer';

export default function CardContainer({ style, children }) {
  return <View style={[styles.cardContainer, style]}>{children}</View>;
}
