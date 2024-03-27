import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useTabBarVisibility from '../hooks/useTabBarVisibility.tsx';
import HomeScreen from '../modules/home/view/HomeScreen.tsx';
import IntroductionScreen from '../modules/introduction/view/IntroductionScreen.tsx';
import SiginUpScreen from '../modules/login/login/view/SiginUpScreen.tsx';
import VoluntaryRegistrationScreen from '../modules/login/login/view/VoluntaryRegistrationScreen.tsx';
import LegalPersonRegistrationScreen from '../modules/login/login/view/LegalPersonRegistrationScreen.tsx';
import {LoginScreen} from '../modules/login/login/view/LoginScreen.tsx';
import {PasswordResetScreen} from '../modules/login/login/view/PasswordResetScreen.tsx';
import {OtpScreen} from '../modules/login/login/view/OtpScreen.tsx';
import {NewPasswordScreen} from '../modules/login/login/view/NewPasswordScreen.tsx';
import GlobalStyles from '../assets/globalStyles/styles.ts';

import NewsIcon from '../assets/images/icons/news.svg';
import HomeIcon from '../assets/images/icons/homeBottomBar.svg';
import VoluntaryList from '../assets/images/icons/voluntaryList.svg';
import PenIcon from '../assets/images/icons/clubBottomBar.svg';
import AboutScreen from '../modules/about/view/AboutScreen.tsx';

import UserIcon from '../assets/images/icons/profilBottomBar.svg';
import StatisticScreen from '../modules/statistic/view/StatisticScreen.tsx';
import ClubsScreen from '../modules/clubs/view/ClubsScreen.tsx';
import DeviceScreen from '../modules/about/view/DeviceScreen.tsx';
import ProfileScreen from '../modules/profile/view/ProfileScreen.tsx';
import {RefreshPasswordScreen} from '../modules/about/view/RefreshPasswordScreen.tsx';
import AboutVolunteerScreen from '../modules/about/view/AboutVolunteerScreen.tsx';
import AboutAppScreen from '../modules/about/view/AboutAppScreen.tsx';
import ClubDetailsScreen from '../modules/clubs/view/ClubDetailsScreen.tsx';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ResponsibleHomeScreen from '../modules/responsible/screens/ResponsibleHomeScreen.tsx';
import AttendanceScreen from '../modules/responsible/screens/AttendanceScreen.tsx';
import RateScreen from '../modules/responsible/screens/RateScreen.tsx';
import VoluntaryListScreen from '../modules/responsible/screens/VoluntaryListScreen.tsx';
import ClubEditScreen from '../modules/ResponsiblePersonofClubs/ClubEditScreen.tsx';
import {NewClubAddScreen} from '../modules/ResponsiblePersonofClubs/NewClubAddScreen.tsx';
import ParticipantsClubScreen from '../modules/ResponsiblePersonofClubs/ParticipantsClubScreen.tsx';
import NewsClubScreen from '../modules/ResponsiblePersonofClubs/NewsClubScreen.tsx';
import NewsScreen from '../modules/ResponsiblePersonofClubs/NewsScreen.tsx';
import {NewsEditScreen} from '../modules/ResponsiblePersonofClubs/NewsEditScreen.tsx';
import ClubAboutScreen from '../modules/clubs/view/ClubAboutScreen.tsx';
import VoluntarysClubListScreen from '../modules/responsible/screens/VoluntarysClubListScreen.tsx';
import StatisticProfilScreen from '../modules/statistic/view/StatisticProfilScreen.tsx';

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
  ClubDetailsScreen: {
    id: string;
  };
  ParticipantsClubScreen: {
    id: string;
  };
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
  ResponsiblePersonofClubs: undefined;
  KonulluDostNavigation: undefined;
  ResponsibleHomeScreen: undefined;
  ClubListScreen: undefined;
  AttendanceScreen: undefined;
  RateScreen: undefined;
  VoluntaryListScreen: undefined;
  ClubEditScreen: undefined;
  NewClubAddScreen: undefined;
  ClubsAddNavigator: undefined;
  NewsScreen: {id: string};
  NewsClubScreen: undefined;
  NewsNavigator: undefined;
  NewsEditScreen: undefined;
  ClubAboutScreen: {id: string};
  VoluntarysClubListScreen: undefined;
  StatisticProfilScreen: {id: string};
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
      <Stack.Screen
        name={'ResponsiblePersonofClubs'}
        component={ResponsiblePersonofClubs}
      />
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
  useTabBarVisibility();
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
          tabBarActiveTintColor: GlobalStyles.colors.bottomIcon,
          tabBarIcon: ({focused}) => (focused ? <HomeIcon /> : <HomeIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'ClubsNavigator'}
        component={ClubsNavigator}
        options={{
          title: 'Klublar',
          tabBarActiveTintColor: GlobalStyles.colors.bottomIcon,
          tabBarIcon: ({focused}) => (focused ? <PenIcon /> : <PenIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'StatisticScreens'}
        component={StatisticScreens}
        options={{
          title: 'Profil',
          tabBarActiveTintColor: GlobalStyles.colors.bottomIcon,
          tabBarIcon: ({focused}) => (focused ? <UserIcon /> : <UserIcon />),
        }}
      />
    </KonulluDostBottomTabNavigator.Navigator>
  );
};

const ResponsibleBottomTabNavigator = () => {
  useTabBarVisibility();
  return (
    <KonulluDostBottomTabNavigator.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        headerShown: false,
      }}>
      <KonulluDostBottomTabNavigator.Screen
        name={'ResponsibleHomeNavigator'}
        component={ResponsibleHomeNavigator}
        options={{
          title: 'Əsas səhifə',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) => (focused ? <HomeIcon /> : <HomeIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'CurrentVoluntaryNavigator'}
        component={CurrentVoluntaryNavigator}
        options={{
          title: 'Könüllü List',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) =>
            focused ? <VoluntaryList /> : <VoluntaryList />,
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'NewsNavigation'}
        component={NewsNavigation}
        options={{
          title: 'Xəbərlər',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) => (focused ? <NewsIcon /> : <NewsIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'AboutNavigator'}
        component={AboutNavigator}
        options={{
          title: 'Haqqımızda',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) => (focused ? <UserIcon /> : <UserIcon />),
        }}
      />
    </KonulluDostBottomTabNavigator.Navigator>
  );
};

const ResponsiblePersonofClubs = () => {
  useTabBarVisibility();
  return (
    <KonulluDostBottomTabNavigator.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        headerShown: false,
      }}>
      <KonulluDostBottomTabNavigator.Screen
        name={'ResponsibleHomeNavigator'}
        component={ResponsibleHomeNavigator}
        options={{
          title: 'Əsas səhifə',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) => (focused ? <HomeIcon /> : <HomeIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'NewsNavigation'}
        component={NewsNavigation}
        options={{
          title: 'Xəbərlər',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) => (focused ? <NewsIcon /> : <NewsIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'ClubsAddNavigator'}
        component={ClubsAddNavigator}
        options={{
          title: 'Klublar',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) => (focused ? <PenIcon /> : <PenIcon />),
        }}
      />
      <KonulluDostBottomTabNavigator.Screen
        name={'VoluntarysClubScreen'}
        component={VoluntarysClubScreen}
        options={{
          title: 'Könüllü list',
          tabBarActiveTintColor: GlobalStyles.colors.purple,
          tabBarIcon: ({focused}) =>
            focused ? <VoluntaryList /> : <VoluntaryList />,
        }}
      />
    </KonulluDostBottomTabNavigator.Navigator>
  );
};
const VoluntarysClubScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="VoluntarysClubListScreen"
        component={VoluntarysClubListScreen}
      />
      <Stack.Screen
        name="StatisticProfilScreen"
        component={StatisticProfilScreen}
      />
    </Stack.Navigator>
  );
};
const ResponsibleHomeNavigator = () => {
  useTabBarVisibility();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ResponsibleHomeScreen"
        component={ResponsibleHomeScreen}
      />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="ClubAboutScreen" component={ClubAboutScreen} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  useTabBarVisibility();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="ClubAboutScreen" component={ClubAboutScreen} />
    </Stack.Navigator>
  );
};

const ClubsNavigator = () => {
  useTabBarVisibility();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ClubsScreen"
        component={ClubsScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ClubDetailsScreen"
        component={ClubDetailsScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.goBack()}>
              {/*<Image source={require('../assets/images/icons/Back.png')} />*/}
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ClubsAddNavigator = () => {
  useTabBarVisibility();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ClubEditScreen"
        component={ClubEditScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ParticipantsClubScreen"
        component={ParticipantsClubScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="NewClubAddScreen"
        component={NewClubAddScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

const StatisticScreens = () => {
  useTabBarVisibility();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AboutNavigator"
        component={AboutNavigator}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const NewsNavigation = () => {
  useTabBarVisibility();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'transparent',
      }}>
      <Stack.Screen name={'NewsClubScreen'} component={NewsClubScreen} />
      <Stack.Screen name={'NewsScreen'} component={NewsScreen} />
      <Stack.Screen name={'NewsEditScreen'} component={NewsEditScreen} />
    </Stack.Navigator>
  );
};

const CurrentVoluntaryNavigator = () => {
  useTabBarVisibility();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="VoluntaryListScreen"
        component={VoluntaryListScreen}
      />
      <Stack.Screen name="RateScreen" component={RateScreen} />
      <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
      <Stack.Screen
        name="VoluntarysClubListScreen"
        component={VoluntarysClubListScreen}
      />
      <Stack.Screen
        name="StatisticProfilScreen"
        component={StatisticProfilScreen}
      />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  useTabBarVisibility();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 10, marginTop: 20}}
              onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
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
              onPress={() => {
                navigation.navigate('AboutScreen');
              }}>
              <Image source={require('../assets/images/icons/white.png')} />
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
              onPress={() => {
                navigation.navigate('AboutScreen');
              }}>
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
              onPress={() => {
                navigation.navigate('AboutScreen');
              }}>
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
              onPress={() => {
                navigation.navigate('AboutScreen');
              }}>
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
              onPress={() => {
                navigation.navigate('AboutScreen');
              }}>
              <Image source={require('../assets/images/icons/Back.png')} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default KonulluDostNavigation;
