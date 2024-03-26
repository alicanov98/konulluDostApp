import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {Platform} from 'react-native';
import {enableScreens} from 'react-native-screens';

const tabHiddenRoutes = [
  'IntroductionNavigator',
  'IntroductionScreen',
  'SiginUpScreen',
  'VoluntaryRegistrationScreen',
  'LegalPersonRegistrationScreen',
  'LoginScreen',
  'PasswordResetScreen',
  'OtpScreen',
  'NewPasswordScreen',
  'ClubDetailsScreen',
  'AboutAppScreen',
  'AboutVolunteerScreen',
  'DeviceScreen',
  'RefreshScreen',
  'ProfileScreen',
  'ParticipantsClubScreen',
  'NewClubAddScreen',
  'ClubAboutScreen',
  'ClubDetailsScreen',
  'NewsEditScreen',
  'NewsScreen',
  'NewsEditScreen',
  'NewPasswordScreen',
  'RefreshPasswordScreen',
  'AboutNavigator',
];

const useTabBarVisibility = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // to remove padding appears in ios
  React.useEffect(() => {
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }
  }, []);

  React.useLayoutEffect(() => {
    if (
      tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route) as string)
    ) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
};

export default useTabBarVisibility;
