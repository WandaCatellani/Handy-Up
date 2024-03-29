import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import PlaceItem from '../components/PlaceItem';
import { loadAddress } from '../../store/actions/places.actions';

const PlaceListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    dispatch(loadAddress());
  }, []);

  const renderItem = (data) => (
    <PlaceItem
      title={data.item.title}
      image={data.item.image}
      address={data.item.address}
      onSelect={() => navigation.navigate('Detalle')}
    />
  );

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default PlaceListScreen;
