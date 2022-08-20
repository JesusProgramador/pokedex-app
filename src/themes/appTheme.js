import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {top} = useSafeAreaInsets;

export const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    // marginTop: 20,
  },
});
