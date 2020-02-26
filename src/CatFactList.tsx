import React from 'react';
import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';

import {ICatFact} from './types';
import {filterByUser} from './filter';
import Item from './Item';
import {ITEM_HEIGHT} from './consts';

const styles = StyleSheet.create({
  container: {padding: 20},
  searchBox: {height: 50},
  searchInput: {borderColor: 'gray', borderWidth: 1},
});

interface ICatFactListProps {
  data: ICatFact[];
  refreshFacts: () => void;
  navigateToDetail: (item: ICatFact) => void;
}

const CatFactList: React.FC<ICatFactListProps> = ({
  data,
  refreshFacts,
  navigateToDetail,
}) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text>Search by user:</Text>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={q => setQuery(() => q)}
        />
      </View>
      <FlatList
        data={filterByUser(data, query)}
        renderItem={item => (
          <Item item={item} navigateToDetail={navigateToDetail} />
        )}
        keyExtractor={item => item._id}
        initialNumToRender={20}
        refreshing={false}
        ListEmptyComponent={() => (
          <View>
            <Text>No data!</Text>
          </View>
        )}
        getItemLayout={(_data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        onRefresh={refreshFacts}
      />
    </View>
  );
};

export default CatFactList;
