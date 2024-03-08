import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useTabBarVisibility from '../hooks/useTabBarVisibility.tsx';
import HomeScreen from '../modules/home/view/HomeScreen.tsx';
import IntroductionScreen from '../modules/introduction/view/IntroductionScreen.tsx';
import SiginUpScreen from '../modules/siginup/view/SiginUpScreen.tsx';
import VoluntaryRegistrationScreen from '../modules/registr/voluntaryPerson/view/VoluntaryRegistrationScreen.tsx';
import LegalPersonRegistrationScreen from '../modules/registr/officialPerson/view/LegalPersonRegistrationScreen.tsx';
import {LoginScreen} from '../modules/login/login/view/LoginScreen.tsx';
import {PasswordResetScreen} from '../modules/login/passwordReset/view/PasswordResetScreen.tsx';
import {OtpScreen} from '../modules/login/passwordReset/view/OtpScreen.tsx';
import {NewPasswordScreen} from '../modules/login/passwordReset/view/NewPasswordScreen.tsx';
import GlobalStyles from '../assets/globalStyles/styles.ts';
// @ts-ignore
import HomeIcon from '../assets/images/icons/pentagramIcon.svg';
// @ts-ignore
import TodoIcon from '../assets/images/icons/todoIcon.svg';
// @ts-ignore
import PenIcon from '../assets/images/icons/penIcon.svg';
import AboutScreen from '../modules/about/view/AboutScreen.tsx';
// @ts-ignore
import UserIcon from '../assets/images/icons/UserIcon.svg';
import StatisticScreen from '../modules/statistic/view/StatisticScreen.tsx';
import ClubsScreen from '../modules/clubs/view/ClubsScreen.tsx';
import DeviceScreen from '../modules/device/view/DeviceScreen.tsx';
import ProfileScreen from '../modules/profile/view/ProfileScreen.tsx';
import {RefreshPasswordScreen} from '../modules/refreshPassword/view/RefreshPasswordScreen.tsx';
import AboutVolunteerScreen from '../modules/aboutVolunteer/view/AboutVolunteerScreen.tsx';
import AboutAppScreen from '../modules/aboutApp/view/AboutAppScreen.tsx';

const Stack = createNativeStackNavigator();
const KonulluDostBottomTabNavigator = createBottomTabNavigator();

export type RootStackParamList = {
  HomeNavigator: undefined;
  HomeScreen: undefined;
  AboutScreen: undefined;
  ProfileScreen: undefined;
  DeviceScreen: undefined;
  RefreshPasswordScreen: undefined;
  AboutVolunteerScreen: undefined;
  AboutAppScreen: undefined;
  IntroductionNavigator: undefined;
  IntroductionScreen: undefined;
  SiginUpScreen: undefined;
  VoluntaryRegistrationScreen: undefined;
  LegalPersonRegistrationScreen: undefined;
  LoginScreen: undefined;
  PasswordResetScreen: undefined;
  OtpScreen: undefined;
  NewPasswordScreen: undefined;
  BottomTabNavigator: undefined;
  KonulluDostNavigation: undefined;
};

const HomeNavigator = () => {
  useTabBarVisibility();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="DeviceScreen" component={DeviceScreen} />
      <Stack.Screen
        name="RefreshPasswordScreen"
        component={RefreshPasswordScreen}
      />
      <Stack.Screen
        name="AboutVolunteerScreen"
        component={AboutVolunteerScreen}
      />
      <Stack.Screen name="AboutAppScreen" component={AboutAppScreen} />
    </Stack.Navigator>
  );
};

const IntroductionNavigator = () => {
  // useTabBarVisibility();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="IntroductionScreen" component={IntroductionScreen} />
      <Stack.Screen name="SiginUpScreen" component={SiginUpScreen} />
      <Stack.Screen
        name="VoluntaryRegistrationScreen"
        component={VoluntaryRegistrationScreen}
      />
      <Stack.Screen
        name="LegalPersonRegistrationScreen"
        component={LegalPersonRegistrationScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="PasswordResetScreen"
        component={PasswordResetScreen}
      />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <KonulluDostBottomTabNavigator.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        headerShown: false,
      }}>
      <KonulluDostBottomTabNavigator.Screen
        name={'HomeNavigator'}
        component={HomeNavigator}
        options={{
          title: 'Əsas səhifə',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <HomeIcon /> : <HomeIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'StatisticScreen'}
        component={StatisticScreen}
        options={{
          title: 'Statistika',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            focused ? (
              <TodoIcon />
            ) : (
              <TodoIcon fill={GlobalStyles.colors.PureWhite} />
            ),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'ClubsScreen'}
        component={ClubsScreen}
        options={{
          title: 'Klublar',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <PenIcon /> : <PenIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'AboutScreen'}
        component={AboutScreen}
        options={{
          title: 'Haqqimizda',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <UserIcon /> : <UserIcon />),
        }}
      />
    </KonulluDostBottomTabNavigator.Navigator>
  );
};

const KonulluDostNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'transparent',
      }}>
      <Stack.Screen
        name={'IntroductionNavigator'}
        component={IntroductionNavigator}
      />
      <Stack.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default KonulluDostNavigation;
