import {showMessage} from 'react-native-flash-message';
import GlobalStyles from '../constants/styles';
import {Platform} from 'react-native';

const showMessageHandler = (messageInfo, type, duration = 2000) => {
  showMessage({
    message: messageInfo,
    icon: {icon: type},
    duration: duration,
    type,
    style: {
      marginTop: Platform.OS === 'android' ? 30 : 0,
      padding: 20,
      backgroundColor:
        type === 'success'
          ? GlobalStyles.colors.GreenADColor
          : type === 'error'
          ? GlobalStyles.colors.Scarlet
          : GlobalStyles.colors.SaffronYellow,
    },
    titleStyle: {
      color:
        type === 'success'
          ? GlobalStyles.colors.DeepGray
          : type === 'warning'
          ? GlobalStyles.colors.DeepGray
          : '#ffffff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
};
export default showMessageHandler;
