import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
// @ts-ignore
import DavamiyyetIcon from '../../../assets/images/icons/davamiyyet.svg';
// @ts-ignore
import QiymetlendirmeIcon from '../../../assets/images/icons/qiymetlendirme.svg';
LocaleConfig.locales.az = {
  monthNames: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'İyun',
    'İyul',
    'Avqust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr',
  ],
  monthNamesShort: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'İyun',
    'İyul',
    'Avq',
    'Sen',
    'Okt',
    'Noy',
    'Dek',
  ],
  dayNames: [
    'Bazar',
    'Bazar ertəsi',
    'Çərşənbə axşamı',
    'Çərşənbə',
    'Cümə axşamı',
    'Cümə',
    'Şənbə',
  ],
  dayNamesShort: ['B.', 'B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.'],
  today: 'Bu gün',
};
LocaleConfig.defaultLocale = 'az';

const StatisticScreen: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 17,
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <StatusBar />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image source={require('../../../assets/images/icons/logo.png')} />

        <TouchableOpacity
          onPress={() => setIsActive(!isActive)}
          style={{
            position: 'relative',
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginBottom: 14,
        }}>
        Salam, Əlicanov.M!
      </Text>

      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
      />
      <View style={{flexDirection: 'row', gap: 17, marginTop: 42}}>
        <View
          style={{
            width: 175,
            height: 49,
            borderRadius: 5,
            backgroundColor: '#FC714E',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 13,
            paddingLeft: 13,
          }}>
          <Image
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              borderTopLeftRadius: 5,
            }}
            source={require('../../../assets/images/image/redBg.png')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <DavamiyyetIcon />
            <Text style={{fontSize: 9, color: '#000'}}>Davamiyyət</Text>
          </View>
          <Text style={{fontSize: 9, color: '#000'}}>Q/b</Text>
        </View>
        <View
          style={{
            width: 186,
            height: 49,
            borderRadius: 5,
            backgroundColor: '#00FF5580',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 13,
            paddingLeft: 13,
            position: 'relative',
          }}>
          <Image
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              borderTopRightRadius: 5,
            }}
            source={require('../../../assets/images/image/greenBg.png')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <QiymetlendirmeIcon />
            <Text style={{fontSize: 9, color: '#000'}}>Qiymətləndirmə</Text>
          </View>
          <Text style={{fontSize: 9, color: '#000'}}>3/5</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 35, marginTop: 38}}>
        <View
          style={{
            width: 213,
            height: 150,
            backgroundColor: '#DBF3FF',
            borderRadius: 5,
            padding: 10,
          }}>
          <Text style={{color: '#757575', fontSize: 14, fontWeight: 'bold'}}>
            Yaradıcılıq Klubu
          </Text>
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 10,
              fontWeight: 'normal',
              marginTop: 6,
            }}>
            Çərşənbə axşamı 3 mart, 2024
          </Text>
          <View style={{flexDirection: 'row', marginTop: 13}}>
            <Image
              style={{zIndex: 1}}
              source={require('../../../assets/images/image/person.png')}
            />
            <Image
              style={{zIndex: 2, right: 10}}
              source={require('../../../assets/images/image/person.png')}
            />
            <Image
              style={{zIndex: 3, right: 20}}
              source={require('../../../assets/images/image/person.png')}
            />
            <Image
              style={{zIndex: 4, right: 30}}
              source={require('../../../assets/images/image/person.png')}
            />
            <View
              style={{
                zIndex: 4,
                right: 40,
                backgroundColor: '#fff',
                borderRadius: 999,
                width: 35,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#2858EE',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                +3
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 8,
              fontWeight: '300',
              marginTop: 10,
            }}>
            Ləman Hacıyeva ilə "Collaborative Art Creation"
          </Text>
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 8,
              fontWeight: '300',
              marginTop: 6,
            }}>
            4 saylı Bakı DOST Mərkəzi
          </Text>
        </View>
        <View
          style={{
            width: 127,
            height: 150,
            backgroundColor: '#F0EFEF',
            borderRadius: 10,
            padding: 8,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StatisticScreen;
