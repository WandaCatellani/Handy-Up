import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CardContainer from '../CardContainer/CardContainer';
import React from 'react';
import colors from '../../constants/colors';

export default function SocialMedia() {
  return (
    <View>
      <CardContainer>
        <Text style={styles.textRedes}>Redes Sociales</Text>

        <View style={styles.SocialMediaContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https:/instagram.com');
            }}
          >
            <View>
              <Image
                source={require('../../../assets/img/instagram.png')}
                style={styles.iconoSocialMedia}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https:/facebook.com');
            }}
          >
            <View>
              <Image
                source={require('../../../assets/img/facebook.png')}
                style={styles.iconoSocialMedia}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://api.whatsapp.com');
            }}
          >
            <View>
              <Image
                source={require('../../../assets/img/whatsApp.png')}
                style={styles.iconoSocialMedia}
              />
            </View>
          </TouchableOpacity>
        </View>
      </CardContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  textRedes: {
    paddingBottom: 5,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
    color: colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  SocialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconoSocialMedia: {
    width: 50,
    height: 50,
  },
});
