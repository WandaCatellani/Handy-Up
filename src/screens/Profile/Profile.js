import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CardContainer from '../../components/CardContainer/CardContainer';
import React from 'react';
import colors from '../../constants/colors';

export default function Profile() {
  return (
    <View style={styles.screen}>
      <CardContainer style={styles.profile}>
        <TouchableOpacity>
          <View style={styles.cardProfile}>
            <Text style={styles.cardTitle}>Hola Wan!</Text>

            <View>
              <MaterialCommunityIcons
                name='account'
                color={colors.primary}
                size={28}
              />
            </View>
          </View>

          <Text style={styles.cardTextPerfil}>Ver Perfil</Text>
        </TouchableOpacity>
      </CardContainer>

      <CardContainer style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.card}>
            <View>
              <MaterialCommunityIcons
                name='chat'
                color={colors.primary}
                size={28}
              />
            </View>

            <Text style={styles.cardTitle}>Chat</Text>
          </View>

          <Text style={styles.cardText}>
            Revisa tus conversaciones pendientes de respuesta
          </Text>
        </TouchableOpacity>
      </CardContainer>

      <CardContainer style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.card}>
            <View>
              <FontAwesome
                name='newspaper-o'
                color={colors.primary}
                size={24}
              />
            </View>

            <Text style={styles.cardTitle}>Solicitudes</Text>
          </View>

          <Text style={styles.cardText}>
            Entra aquí para revisar tus solicitudes
          </Text>
        </TouchableOpacity>
      </CardContainer>

      <CardContainer style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.card}>
            <View>
              <MaterialCommunityIcons
                name='cash-usd'
                color={colors.primary}
                size={28}
              />
            </View>

            <Text style={styles.cardTitle}>Pagos</Text>
          </View>

          <Text style={styles.cardText}>
            Realiza pagos y revisa tu historial de transacciones
          </Text>
        </TouchableOpacity>
      </CardContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  cardProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: 350,
  },
  cardTitle: {
    fontSize: 20,
    color: colors.primary,
    paddingLeft: 10,
  },
  cardTextPerfil: {
    paddingLeft: 20,
    fontSize: 14,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
    paddingVertical: 10,
    width: 380,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 0,
  },
  cardText: {
    paddingLeft: 10,
    fontSize: 14,
  },
});
