import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import useApi from '../useApi';
import {ICatFact, RootStackParamList} from '../types';
import assertNever from '../assertNever';
import CatFactList from '../components/CatFactList';

interface ICatFacts {
  all: ICatFact[];
}

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CatFacts'
>;

type CatListContainerProps = {
  navigation: ProfileScreenNavigationProp;
};
const CatListContainer: React.FC<CatListContainerProps> = ({navigation}) => {
  const [facts, refreshFacts] = useApi<ICatFacts>(
    'https://cat-fact.herokuapp.com/facts',
  );

  const navigateToDetail = (item: ICatFact) => {
    navigation.navigate('Detail', item);
  };

  switch (facts.type) {
    case 'NoData':
    case 'Loading':
      return <ActivityIndicator size="large" />;
    case 'Error':
      return (
        <View>
          <Text>{facts.error}</Text>
        </View>
      );
    case 'Data':
      return (
        <CatFactList
          data={facts.data.all}
          refreshFacts={refreshFacts}
          navigateToDetail={navigateToDetail}
        />
      );
    default:
      return assertNever(facts);
  }
};

export default CatListContainer;
