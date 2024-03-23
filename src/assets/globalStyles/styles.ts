import {StyleSheet} from 'react-native';

const colors = {
  bottomIcon: '#861DBF',
  darkPlum: '#412B4D',
  purple: '#861DBF',
  PureWhite: '#ffffff',
  CobaltBlue: '#2858EE',
  shadowBlack: '#5F6772',
  fontBlack: '#252C36',
  PureBlack: '#212121',
  TransparentBlack: '#00000050',
  PlaceHolder: 'rgba(0, 0, 0, 0.5)',
};

const textStyles = StyleSheet.create({
  MediumText: {},
  RegularText: {},
  SemiBold: {fontSize: 16},
  BoldText: {},
});
const buttons = {
  buttonPurple: {
    width: 355,
    height: 56,
    backgroundColor: '#861DBF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 15,
  },
  buttonWhite: {
    width: 355,
    height: 56,
    borderColor: '#861DBF',
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
};
const titles = {
  introTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#412B4D',
    paddingBottom: 50,
  },
};

const GlobalStyles = {
  colors: {
    ...colors,
  },
  background: {},
  fonts: {
    default_regularFont: 'Intel',
  },
  button: {
    ...buttons,
  },
  textKind: {
    ...titles,
  },
};
export default GlobalStyles;
