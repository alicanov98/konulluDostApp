import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/KonulluDostNavigator.tsx';
import {StackNavigationProp} from '@react-navigation/stack';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
// @ts-ignore
import LeftArrowIcon from '../../../assets/images/icons/rightArrowIcon.svg';

const IntroductionScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colors.CobaltBlue}
      />
      <View style={{flex: 1, backgroundColor: GlobalStyles.colors.CobaltBlue}}>
        <View
          style={{
            width: 300,
            top: 50,
            paddingLeft: 16,
          }}>
          <Text
            style={{
              padding: 5,
              fontSize: 42,
              lineHeight: 45,
              fontWeight: '700',
              color: '#fff',
            }}>
            fəaliyyətinizi idarə etməyin ən sürətli yolu
          </Text>
          <Text
            style={{
              width: 259,
              fontSize: 14,
              color: '#fff',
              lineHeight: 20,
            }}>
            Qısa zaman ərzində bütün prosesləri izləmək və tənzimləmək üçün
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            width: 156,
            height: 156,
            backgroundColor: '#fff',
            bottom: 100,
            right: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
          }}
          onPress={() => navigation.navigate('SiginUpScreen')}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Image
          source={require('../image/introductionImg.png')}
          style={{
            zIndex: -5,
            width: '100%',
            height: 550,
            bottom: -110,
            left: -20,
            resizeMode: 'contain',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default IntroductionScreen;
