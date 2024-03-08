import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/KonulluDostNavigator.tsx';

const AboutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingLeft: 23,
        paddingRight: 23,
        paddingTop: 64,
        paddingBottom: 43,
        backgroundColor: GlobalStyles.colors.PureWhite,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{marginTop: 18}}
          source={require('../../../assets/images/image/personNewImg.png')}
        />
        <Text
          style={{
            color: '#424954',
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 8,
          }}>
          Əlicanov Məlik
        </Text>
        <Text
          style={{
            color: '#424954',
            fontWeight: '500',
            fontSize: 16,
            marginTop: 7,
          }}>
          4DK 32
        </Text>
        <Text
          style={{
            color: '#424954',
            fontWeight: '400',
            fontSize: 14,
            marginTop: 10,
          }}>
          Məsul şəxs: Sayyara Binnatova
        </Text>
      </View>
      <View
        style={{
          marginTop: 38,
          gap: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{marginRight: 26}}
              source={require('../../../assets/images/icons/pofilAboutIcon.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 8,
                }}>
                Profil məlumatları
              </Text>
              <Text
                style={{
                  color: '#979797',
                  fontWeight: '500',
                  fontSize: 10,
                  marginTop: 10,
                }}>
                Ad, soyad, email və digər məlumatlar
              </Text>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/icons/leftIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DeviceScreen')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{marginRight: 26}}
              source={require('../../../assets/images/icons/coolicon.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 8,
                }}>
                Aparat haqqında
              </Text>
              <Text
                style={{
                  color: '#979797',
                  fontWeight: '500',
                  fontSize: 10,
                  marginTop: 10,
                }}>
                Aparat barəsində bütün məlumatlar
              </Text>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/icons/leftIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RefreshPasswordScreen')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{marginRight: 26}}
              source={require('../../../assets/images/icons/passwordIcon.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 8,
                }}>
                Şifrəni dəyişmə
              </Text>
              <Text
                style={{
                  color: '#979797',
                  fontWeight: '500',
                  fontSize: 10,
                  marginTop: 10,
                }}>
                Şifrəni yeniləmək üçün daxil ol
              </Text>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/icons/leftIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AboutVolunteerScreen')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{marginRight: 26}}
              source={require('../../../assets/images/icons/valluneFrirendAboutIcon.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 8,
                }}>
                Könüllü Dost Haqqında
              </Text>
              <Text
                style={{
                  color: '#979797',
                  fontWeight: '500',
                  fontSize: 10,
                  marginTop: 10,
                }}>
                Agentlik barəsində bütün məlumatlar
              </Text>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/icons/leftIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AboutAppScreen')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{marginRight: 26}}
              source={require('../../../assets/images/icons/appabout.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#424954',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 8,
                }}>
                App haqqında
              </Text>
              <Text
                style={{
                  color: '#979797',
                  fontWeight: '500',
                  fontSize: 10,
                  marginTop: 10,
                }}>
                App barəsində bütün məlumatlar
              </Text>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/icons/leftIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
