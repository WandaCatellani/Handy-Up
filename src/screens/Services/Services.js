import {
  Image,
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
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import colors from '../../constants/colors';

export default function Services({ navigation }) {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.categories.selected);
  const services = useSelector((state) => state.services.filteredServices);
  const service = useSelector((state) => state.services.services);

  console.log(item.name);
  console.log(services.name);
  console.log(service.name);

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

            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.textName}>{item.name}</Text>
              </View>

              <View>
                <Text style={styles.subTitle}>
                  Selecciona el servicio de {item.name} que necesitas
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => handleClose()}>
              <View>
                <Image
                  source={require('../../../assets/img//icon-close.png')}
                  style={styles.iconoClose}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.descripcion}>
            <Text style={styles.textDescripcion}>{item.description}</Text>
          </View>
        </CardContainer>

        {/* SERVICIOS DESTACADOS */}
        <CardContainer>
          <Text style={styles.textDestacado}>Productos destacados</Text>

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
            <Text style={styles.textServices}>Todos los servicios</Text>
          </TouchableOpacity>
        </CardContainer>

        {/* REDES SOCIALES */}
        <SocialMedia />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  containerSuperiorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  titleContainer: {
    backgroundColor: 'green',
    flex: 1,
    alignItems: 'center',
  },
  textName: {
    fontFamily: 'Roboto-Medium',
    color: colors.primary,
    fontSize: 20,
    width: 200,
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 16,
  },
  iconoClose: {
    height: 20,
    width: 20,
  },
  textDescripcionTienda: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
  },
  descripcion: {
    marginVertical: 20,
    backgroundColor: colors.accent,
  },
  textDestacado: {
    paddingBottom: 5,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
    color: colors.black,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  cardProductosDestacados: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
  },
  textServices: {
    paddingBottom: 5,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
    color: 'black',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
