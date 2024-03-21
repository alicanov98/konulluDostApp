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
import LeftArrowIcon from '../../../assets/images/icons/rightArrowIcon.svg';

const IntroductionScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: GlobalStyles.colors.purple}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colors.purple}
      />
      <View style={{flex: 1}}>
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
            zIndex: 1,
          }}
          onPress={() => navigation.navigate('SiginUpScreen')}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Image
            style={{width: 300, height: 600}}
            source={require('../image/introductionImg.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroductionScreen;
