import React from 'react';
import {
  View,
  Text,
  ListRenderItemInfo,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ICatFact} from './types';
import {ITEM_HEIGHT} from './consts';

const styles = StyleSheet.create({
  container: {height: ITEM_HEIGHT},
  text: {fontWeight: 'bold'},
});

interface IItemProps {
  item: ListRenderItemInfo<ICatFact>;
  navigateToDetail: (item: ICatFact) => void;
}

const Item: React.FC<IItemProps> = ({item, navigateToDetail}) => {
  const {first, last} = item.item.user
    ? item.item.user.name
    : {first: '', last: ''};
  const text = item.item.text;
  return (
    <TouchableOpacity
      onPress={() => {
        navigateToDetail(item.item);
      }}>
      <View style={styles.container}>
        <Text style={styles.text}>{`${first} ${last}`}</Text>
        <Text numberOfLines={2}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
