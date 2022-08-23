import React from 'react';
import {Platform, View, Text, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {globalStyles} from '../themes/appTheme';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 35,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />

      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //header
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default SearchScreen;
