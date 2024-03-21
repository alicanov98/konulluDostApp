import {StyleSheet} from 'react-native';

const colors = {
  purple: '#861DBF',
  PureBlack: '#000000',
  PureWhite: '#ffffff',
  CobaltBlue: '#2858EE',
  TransparentBlack: '#00000050',
  PlaceHolder: 'rgba(0, 0, 0, 0.5)',
};

const textStyles = StyleSheet.create({
  MediumText: {},
  RegularText: {},
  SemiBold: {fontSize: 16},
  BoldText: {},
});

const GlobalStyles = {
  colors: {
    ...colors,
  },
  background: {},
  fonts: {
    default_regularFont: 'SF-Pro-Text-Regular',
  },
  textKind: StyleSheet.create({
    MainTitle: {
      ...textStyles.SemiBold,
      fontSize: 20,
      lineHeight: 28,
    },
  }),
};
export default GlobalStyles;
