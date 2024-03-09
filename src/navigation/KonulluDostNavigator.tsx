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
import ClubDetailsScreen from '../modules/ClubDetail/view/ClubDetailsScreen.tsx';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ResponsibleHomeScreen from '../modules/responsible/home/view/ResponsibleHomeScreen.tsx';
import ClubListScreen from '../modules/responsible/ clubList/view/ClubListScreen.tsx';
import AttendanceScreen from '../modules/responsible/attendance/view/AttendanceScreen.tsx';
import RateScreen from '../modules/responsible/rate/view/RateScreen.tsx';
import VoluntaryListScreen from '../modules/responsible/voluntaryList/view/VoluntaryListScreen.tsx';

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
  ClubDetailsScreen: undefined;
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
  ResponsibleBottomTabNavigator: undefined;
  KonulluDostNavigation: undefined;
  ResponsibleHomeScreen: undefined;
  ClubListScreen: undefined;
  AttendanceScreen: undefined;
  RateScreen: undefined;
  VoluntaryListScreen: undefined;
};

const HomeNavigator = () => {
  useTabBarVisibility();
  const navigation = useNavigation();
  // @ts-ignore
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.navigate('AboutScreen')}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="DeviceScreen"
        component={DeviceScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.navigate('AboutScreen')}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="RefreshPasswordScreen"
        component={RefreshPasswordScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.navigate('AboutScreen')}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AboutVolunteerScreen"
        component={AboutVolunteerScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.navigate('AboutScreen')}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AboutAppScreen"
        component={AboutAppScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.navigate('AboutScreen')}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="ClubDetailsScreen" component={ClubDetailsScreen} />
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
const ResponsibleBottomTabNavigator = () => {
  return (
    <KonulluDostBottomTabNavigator.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        headerShown: false,
      }}>
      <KonulluDostBottomTabNavigator.Screen
        name={'ResponsibleHomeScreen'}
        component={ResponsibleHomeScreen}
        options={{
          title: 'Əsas səhifə',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <HomeIcon /> : <HomeIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'VoluntaryListScreen'}
        component={VoluntaryListScreen}
        options={{
          title: 'Könüllü List',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <UserIcon /> : <UserIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'AttendanceScreen'}
        component={AttendanceScreen}
        options={{
          title: 'Davamiyyət',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <UserIcon /> : <UserIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'RateScreen'}
        component={RateScreen}
        options={{
          title: 'Qiymətləndir',
          tabBarActiveTintColor: GlobalStyles.colors.CobaltBlue,
          tabBarIcon: ({focused}) => (focused ? <UserIcon /> : <UserIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'ClubListScreen'}
        component={ClubListScreen}
        options={{
          title: 'Klub List',
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
      <Stack.Screen
        name={'ResponsibleBottomTabNavigator'}
        component={ResponsibleBottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default KonulluDostNavigation;
