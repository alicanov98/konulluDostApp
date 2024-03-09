import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';

const DeviceScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 89,
        backgroundColor: GlobalStyles.colors.PureWhite,
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <Text style={{color: '#212121', fontSize: 32, fontWeight: 'bold'}}>
          Aparat haqqında
        </Text>
        <Text
          style={{
            color: '#909090',
            fontSize: 16,
            fontWeight: '500',
            marginTop: 8,
          }}>
          Aparat haqqında bütün məlumatlar.
        </Text>
        <Text
          style={{
            color: '#212121',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 25,
          }}>
          Aparat haqqında nələri bilməliyəm?
        </Text>
        <Text
          style={{
            color: '#909090',
            fontSize: 14,
            fontWeight: 'normal',
            marginTop: 22,
          }}>
          DOST Agentliyinin könüllülük siyasəti könüllü fəaliyyətinə yeni
          yanaşmanın nümayiş etdirilməsinə və Agentliyin bu fəaliyyətin effektiv
          təşkili sahəsində qabaqcıl qurumlardan birinə çevrilməsinə
          yönəlmişdir. DOST Agentliyi tərəfindən təşkil olunan könüllülük
          proqramının əsas missiyaları aşağıdakılardır:
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 370,
              height: 1,
              backgroundColor: '#DCE2EF',
              marginTop: 14,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#212121',
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 17,
            }}>
            Necə işləyir?
          </Text>
          <Image
            source={require('../../../assets/images/icons/leftIcon.png')}
          />
        </TouchableOpacity>
        <ScrollView>
          <Text
            style={{
              color: '#909090',
              fontSize: 14,
              fontWeight: 'normal',
              marginTop: 7,
            }}>
            Maecenas malesuada tellus eu posuere vehicula. Nam nec dapibus nisi,
            quis efficitur ante:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              gap: 17,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 6,
                height: 6,
                backgroundColor: '#767676',
                borderRadius: 9999,
                borderWidth: 1,
                borderColor: '#767676',
              }}
            />
            <Text
              style={{
                color: '#909090',
                fontSize: 14,
                fontWeight: 'normal',
                marginTop: 7,
              }}>
              Tell your friends about Gastos Provider Club and register them on
              the app.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              gap: 17,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 6,
                height: 6,
                backgroundColor: '#767676',
                borderRadius: 9999,
                borderWidth: 1,
                borderColor: '#767676',
              }}
            />
            <Text
              style={{
                color: '#909090',
                fontSize: 14,
                fontWeight: 'normal',
                marginTop: 7,
              }}>
              Tell your friends about Gastos Provider Club and register them on
              the app.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              gap: 17,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 6,
                height: 6,
                backgroundColor: '#767676',
                borderRadius: 9999,
                borderWidth: 1,
                borderColor: '#767676',
              }}
            />
            <Text
              style={{
                color: '#909090',
                fontSize: 14,
                fontWeight: 'normal',
                marginTop: 7,
              }}>
              Tell your friends about Gastos Provider Club and register them on
              the app.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              gap: 17,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 6,
                height: 6,
                backgroundColor: '#767676',
                borderRadius: 9999,
                borderWidth: 1,
                borderColor: '#767676',
              }}
            />
            <Text
              style={{
                color: '#909090',
                fontSize: 14,
                fontWeight: 'normal',
                marginTop: 7,
              }}>
              Tell your friends about Gastos Provider Club and register them on
              the app.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DeviceScreen;
