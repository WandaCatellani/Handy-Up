import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CardContainer from '../CardContainer/CardContainer';
import Colors from '../../constants/colors';
import React from 'react';

// import { addItem } from '../store/actions/cart.actions';

const Card = ({ navigation, item }) => {
  // const dispatch = useDispatch();
  const service = useSelector((state) => state.categories.selected);

  // const handleAddItem = () => {
  //   dispatch(addItem(product));
  //   Alert.alert('SERVICIO AGREGADO!', ' ', [{ text: 'Ok' }]);
  // };

  const handleClose = () => navigation.goBack();

  return (
    <>
      <ScrollView style={styles.screen}>
        <View style={styles.screen}>
          <CardContainer style={styles.cardContainer}>
            <View style={styles.encabezadoCard}>
              <Text style={styles.textTitulo}>{service.name}</Text>

              <TouchableOpacity onPress={() => handleClose()}>
                <Image
                  source={require('../../../assets/img/icon-close.png')}
                  style={styles.iconoClose}
                />
              </TouchableOpacity>
            </View>

            {/* Imagen del servicio */}
            <View style={styles.imagePrincipalContainer}>
              <Image source={{ uri: service.image }} style={styles.image} />
            </View>

            {/* Botón para agregar al Cart + precio */}
            <View style={styles.containerAgrgarCartPrecio}>
              <View style={styles.agregarCartContainer}>
                <TouchableOpacity onPress={handleAddItem}>
                  <Text style={styles.textButton}>AGREGAR AL CARRITO</Text>
                </TouchableOpacity>

                <View>
                  <Image
                    source={require('../assets/images/cart.png')}
                    style={styles.iconosCart}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.precio}>${service.id}</Text>
              </View>
            </View>

            <Text style={styles.textDescripcionTitulo}>
              Descripción del Servicio:
            </Text>

            <Text style={styles.textDescripcion}>{service.id}</Text>
          </CardContainer>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.backgroundPrimary,
  },
  cardContainer: {
    marginTop: 10,
    height: '95%',
  },
  encabezadoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(69, 123, 157, 0.2)',
    color: 'black',
  },
  textTitulo: {
    fontFamily: 'roboto-medium',
    fontSize: 16,
  },
  iconoClose: {
    height: 20,
    width: 20,
  },
  imagePrincipalContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  containerAgrgarCartPrecio: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  agregarCartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 217,
    height: 36,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  textButton: {
    color: Colors.secondary,
    padding: 10,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
    fontSize: 14,
  },
  iconosCart: {
    height: 18,
    width: 18,
  },
  precio: {
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
  },
  textDescripcionTitulo: {
    marginTop: 30,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  textDescripcion: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
});

export default Card;
