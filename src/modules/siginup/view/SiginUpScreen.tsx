import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Tab} from '../component/Tab';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../navigation/KonulluDostNavigator.tsx';

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
      <View>
        <Image
          source={require('../images/SignupPhoto.png')}
          style={{
            zIndex: -5,
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            top: -200,
          }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            width: 626,
            height: 626,
            borderRadius: 9999,
            left: -97,
            bottom: -100,
            alignItems: 'center',
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
                color: '#252C36',
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
                style={{
                  width: 355,
                  height: 56,
                  backgroundColor: '#252C36',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 15,
                  borderRadius: 15,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Qeydiyyat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
                style={{
                  width: 355,
                  height: 56,
                  backgroundColor: '#424954',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Giriş</Text>
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
                  color: '#5F6772',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Daxil olmaqla və ya qeydiyyatdan keçməklə{' '}
                <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                  Şərt və Siyasətimizlə
                </Text>{' '}
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
