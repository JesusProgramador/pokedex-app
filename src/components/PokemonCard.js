import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({pokemon}) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  const navigation = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
    }).then(colors => {
      if (!isMounted.current) return;

      colors.platform === 'android'
        ? setBgColor(colors.dominant || 'grey')
        : setBgColor(colors.background || 'grey');
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }
      activeOpacity={0.9}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -7,
  },
});
