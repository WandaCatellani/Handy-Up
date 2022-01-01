import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  filterService,
  selectService,
} from '../../../store/actions/services.actions';
import { useDispatch, useSelector } from 'react-redux';

import CardContainer from '../../components/CardContainer/CardContainer';
import colors from '../../constants/colors';

export default function Services({ navigation }) {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.categories.selected);
  const services = useSelector((state) => state.services.filteredServices);

  useEffect(() => {
    dispatch(filterService(item.id));
  }, []);

  const handleSelected = (service) => {
    dispatch(selectService(service.id));
    navigation.navigate('professionals', {
      name: service.name,
    });
  };

  const handleClose = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <ScrollView>
        <CardContainer>
          <View style={styles.containerSuperiorCard}>
            <View>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <View>
              <View style={styles.textContainer}>
                <Text style={styles.textName}>{item.name}</Text>
              </View>

              <View>
                <Text style={styles.textSubtitulo}>
                  Selecciona el servicio de {item.name} que necesitas
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => handleClose()}>
              <View>
                <Image
                  source={require('../../../assets/iconClose.png')}
                  style={styles.iconoClose}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.descripcionTienda}>
            <Text style={styles.textDescripcionTienda}>{item.description}</Text>
          </View>
        </CardContainer>

        {/* SERVICIOS DESTACADOS */}
        <CardContainer>
          <Text style={styles.textPromociones}>Productos destacados</Text>

          <View style={styles.cardProductosDestacados}>
            {services.map((service, index) => {
              if (service.destacado === true) {
                return (
                  <TouchableOpacity
                    style={styles.imageProductosDestacadosContainer}
                    onPress={() => handleSelected(service)}
                    key={index}
                  >
                    <View>
                      <Image
                        source={{ uri: service.image }}
                        style={styles.imageProductosDestacados}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
            }}
          >
            <Text style={styles.textVerProductos}>Todos los servicios</Text>
          </TouchableOpacity>
        </CardContainer>

        {/* REDES SOCIALES */}
        <CardContainer>
          <Text style={styles.textPromociones}>Redes Sociales</Text>

          <View style={styles.redesSocialesContainer}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https:/instagram.com');
              }}
            >
              <View>
                <Image
                  source={{
                    uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png',
                  }}
                  style={styles.iconosRedesSociales}
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
                  source={{
                    uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png',
                  }}
                  style={styles.iconosRedesSociales}
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
                  source={{
                    uri: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Whatsapp_svg2-512.png',
                  }}
                  style={styles.iconosRedesSociales}
                />
              </View>
            </TouchableOpacity>
          </View>
        </CardContainer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  containerSuperiorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  iconoClose: {
    height: 20,
    width: 20,
  },
  textName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  textSubtitulo: {
    fontSize: 16,
  },
  textDescripcionTienda: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
  },
  textContainer: {
    width: 200,
  },
  descripcionTienda: {
    marginVertical: 20,
  },
  containerInferiorCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconosInferioresCard: {
    width: 20,
    height: 20,
  },
  cardPromociones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textPromociones: {
    paddingBottom: 5,
    marginBottom: 15,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    color: 'black',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  imagePromocionesContainer: {
    width: 150,
    paddingHorizontal: 3,
    borderWidth: 0,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,

    elevation: 2,
  },
  imagePromociones: {
    width: '100%',
    height: 100,
    borderRadius: 15,
  },
  cardProductosDestacados: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageProductosDestacadosContainer: {
    width: '33%',
    marginVertical: 3,
    paddingHorizontal: 3,
    borderWidth: 0,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 2,
  },

  imageProductosDestacados: {
    width: '100%',
    height: 100,
    borderRadius: 15,
  },
  textVerProductos: {
    textAlign: 'center',
    paddingTop: 10,
    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  redesSocialesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconosRedesSociales: {
    width: 55,
    height: 55,
  },
});
