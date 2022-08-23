import React, {useState} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({style}) => {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar pokemon"
          style={{...styles.textInput, top: Platform.OS === 'android' ? 2 : 0}}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChange={setTextValue}
        />

        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
