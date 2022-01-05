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

import CardContainer from '../../components/CardContainer/CardContainer';
import React from 'react';
import { addItem } from '../../../store/actions/cart.actions';
import colors from '../../constants/colors';

export default function Professionals({ navigation }) {
  const dispatch = useDispatch();
  const serviceID = useSelector((state) => state.services.selected);
  const services = useSelector((state) => state.services.services);
  const service = services.find((item) => item.id === serviceID);
  const handleClose = () => navigation.goBack();

  const handlerAddItemCart = () => {
    dispatch(addItem(service)); /* serviceID */
    Alert.alert('¡ITEM AGREGADO!', ' ', [{ text: 'Ok' }]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.info}>
        <CardContainer style={styles.cardContainer}>
          <View style={styles.encabezadoCard}>
            <Text style={styles.textTitulo}>{serviceID.name}</Text>

            <TouchableOpacity onPress={() => handleClose()}>
              <Image
                source={require('../../../assets/img/icon-close.png')}
                style={styles.iconoClose}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.imagePrincipalContainer}>
            <Image source={{ uri: serviceID.image }} style={styles.image} />
          </View>

          <View style={styles.containerAgrgarCartPrecio}>
            <View style={styles.agregarCartContainer}>
              <TouchableOpacity onPress={handlerAddItemCart}>
                <Text style={styles.textButton}>AGREGAR AL CARRITO</Text>
              </TouchableOpacity>

              <View>
                <Image
                  source={require('../../../assets/img/cart.png')}
                  style={styles.iconosCart}
                />
              </View>
            </View>

            <View>
              <Text style={styles.precio}>$ {serviceID.price}</Text>
            </View>
          </View>

          <Text style={styles.textDescripcionTitulo}>
            Descripción del Producto:
          </Text>

          <Text style={styles.textDescripcion}>
            {serviceID.principalDescription}
          </Text>
        </CardContainer>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    color: colors.black,
  },
  textTitulo: {
    fontFamily: 'Roboto-Medium',
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
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  textButton: {
    color: colors.grayMedium,
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
  // title: {
  //   fontSize: 20,
  //   fontFamily: 'Roboto-Bold',
  //   marginBottom: 10,
  // },
});
