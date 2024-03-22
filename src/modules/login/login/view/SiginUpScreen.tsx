import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Tab} from '../component/Tab.tsx';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../../navigation/KonulluDostNavigator.tsx';

const SiginUpScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [isActive, setIsActive] = React.useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colors.TransparentBlack}
      />
      <View style={{position: 'relative'}}>
        <Image
          style={{
            position: 'absolute',
            width: 326,
            height: 104,
            zIndex: -4,
            top: '15%',
            left: '10%',
          }}
          source={require('../../../../assets/images/icons/logointo.png')}
        />
        <Image
          source={require('../../../../assets/images/image/image17.png')}
          style={{
            zIndex: -5,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            top: -220,
          }}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            top: -240,
            left: 7,
            backgroundColor: GlobalStyles.colors.PureWhite,
            width: 626,
            height: 626,
            borderRadius: 9999,
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              paddingLeft: 60,
              paddingRight: 80,
              marginTop: 90,
            }}>
            <Text
              style={{
                color: GlobalStyles.colors.fontBlack,
                fontSize: 23,
                fontWeight: '600',
                marginBottom: 30,
              }}>
              Qeydiyyatdan keç ya da Daxil Ol
            </Text>
            <Tab setIsActive={setIsActive} />
            <View style={{marginTop: 70, marginBottom: 40}}>
              <TouchableOpacity
                onPress={() =>
                  isActive
                    ? navigation.navigate('VoluntaryRegistrationScreen')
                    : navigation.navigate('LegalPersonRegistrationScreen')
                }
                style={GlobalStyles.button.buttonPurple}>
                <Text
                  style={{
                    fontSize: 16,
                    color: GlobalStyles.colors.PureWhite,
                    fontWeight: 'bold',
                  }}>
                  Qeydiyyat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                style={GlobalStyles.button.buttonWhite}>
                <Text
                  style={{
                    fontSize: 16,
                    color: GlobalStyles.colors.fontBlack,
                    fontWeight: 'bold',
                  }}>
                  Giriş
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 340,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: insets.bottom,
              }}>
              <Text
                style={{
                  color: GlobalStyles.colors.shadowBlack,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Daxil olmaqla və ya qeydiyyatdan keçməklə{' '}
                <Text
                  style={{
                    color: GlobalStyles.colors.PureBlack,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Şərt və Siyasətimizlə
                </Text>
                razılaşırsınız
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SiginUpScreen;
