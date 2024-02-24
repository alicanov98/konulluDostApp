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

const Stack = createNativeStackNavigator();

const KonulluDostBottomTabNavigator = createBottomTabNavigator();

export type RootStackParamList = {
  HomeNavigator: undefined;
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
    </Stack.Navigator>
  );
};

const IntroductionNavigator = () => {
  useTabBarVisibility();
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
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <KonulluDostBottomTabNavigator.Screen
        name={'HomeNavigator'}
        component={HomeNavigator}
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
