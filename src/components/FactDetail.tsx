import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';

const styles = StyleSheet.create({
  container: {padding: 20},
  name: {fontWeight: 'bold'},
  text: {fontStyle: 'italic', marginTop: 10},
  upvotes: {marginTop: 10},
});

type FactDetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export interface IFactDetailProps {
  route: FactDetailRouteProp;
}
const FactDetail: React.FC<IFactDetailProps> = ({route}) => {
  const fact = route.params;
  const {first, last} = fact.user?.name || {first: '', last: ''};
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{`${first} ${last}`}</Text>
      <Text style={styles.text}>{fact.text}</Text>
      <Text style={styles.upvotes}>{`upvotes: ${fact.upvotes}`}</Text>
    </View>
  );
};

export default FactDetail;
