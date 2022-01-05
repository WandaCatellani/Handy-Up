import {
  ActivityIndicator,
  FlatList,
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
import CardProfessional from '../../components/CardProfessional/CardProfessional';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import colors from '../../constants/colors';

export default function Services({ navigation }) {
  const dispatch = useDispatch();
  const handleClose = () => navigation.goBack();

  const item = useSelector((state) => state.categories.selected);
  const services = useSelector((state) => state.services.filteredServices);
  const allServices = useSelector((state) => state.services.services);

  console.log(item.name);
  console.log(services.name);
  console.log(allServices.name);

  useEffect(() => {
    setTimeout(() => dispatch(filterService(item)), 1000);

    return () => {
      dispatch(filterService());
    };
  }, [item]);

  const handleSelected = (item) => {
    dispatch(selectService(item.id));
    navigation.navigate('professionals', {
      name: item.name,
    });
  };

  const renderItemService = ({ item }) => (
    <CardProfessional item={item} onSelected={handleSelected} />
  );

  return (
    <View style={styles.screen}>
      <ScrollView>
        <CardContainer>
          <View style={styles.containerCard}>
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

                <View style={styles.container}>
                  {services.length ? (
                    <FlatList
                      data={services}
                      keyExtractor={(item) => item.id}
                      renderItem={renderItemService}
                    />
                  ) : (
                    <ActivityIndicator color={colors.secondary} size='large' />
                  )}
                </View>
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
          <Text style={styles.textDestacado}>Servicios destacados</Text>

          <View style={styles.cardProductosDestacados}>
            {allServices.map((service, i) => {
              if (service.destacado === true) {
                return (
                  <TouchableOpacity
                    style={styles.imageProductosDestacadosContainer}
                    onPress={() => handleSelected(allServices)}
                    key={i}
                  >
                    <View>
                      <Image
                        source={{ uri: allServices.image }}
                        style={styles.imageDestacados}
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
    backgroundColor: colors.white,
  },
  containerCard: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
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
    // fontSize: 20,
    // width: 200,
    // paddingBottom: 10,
  },
  subTitle: {
    fontSize: 16,
  },
  iconoClose: {
    height: 20,
    width: 20,
  },
  // imageDestacados: {
  //   width: 20,
  //   height: 20,
  // },
  textDescripcionTienda: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
  },
  descripcion: {
    // marginVertical: 20,
    backgroundColor: colors.blue,
  },
  textDestacado: {
    // paddingBottom: 5,
    // marginBottom: 15,
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
    // paddingBottom: 5,
    // marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
    color: 'black',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
