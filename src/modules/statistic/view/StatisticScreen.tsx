import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import ClubCards from '../../../components/cards/ClubCards.tsx';
// @ts-ignore
import DavamiyyetIcon from '../../../assets/images/icons/davamiyyet.svg';
// @ts-ignore
import QiymetlendirmeIcon from '../../../assets/images/icons/qiymetlendirme.svg';

// Lokal ayarları yapılandır
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

interface Reservation {
  date: Date;
  name: string;
  datee: string;
  bgColor: string;
  color: string;
  nameColor: string;
  center: string;
  topic: string;
}

const reservations: Reservation[] = [
  {
    date: new Date(2024, 2, 3),
    name: 'Yaradıcılıq Klubu',
    datee: 'Çərşənbə axşamı 3 mart, 2024, 12:00',
    bgColor: '#DBF3FF',
    color: '#5A5A5A',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' Ləman Hacıyeva ilə "Collaborative Art Creation"',
  },
  {
    date: new Date(2024, 2, 4),
    name: 'Fərdi İnkişaf Klubu',
    datee: 'Çərşənbə 4 mart, 2024, 15:00',
    bgColor: '#9EFFBE',
    color: '#000',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' "Universitet illərini dəyərləndirən yol axtarışı"',
  },
  {
    date: new Date(2024, 1, 5),
    name: 'Xarici dil',
    datee: 'Cümə axşamı 5 mart, 2024, 12:00',
    bgColor: '#FC714E',
    color: '#fff',
    nameColor: '#fff',
    center: '5 saylı Bakı DOST Mərkəzi',
    topic: '"Easiest ways to learn English" adlı təlim keçəcək.',
  },
];

const StatisticScreen: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const [isActive, setIsActive] = useState(false);

  const getReservationsForDate = (dateString: string): Reservation[] => {
    const selectedDate = new Date(dateString);
    const filteredReservations = reservations.filter(item => {
      const reservationDate = new Date(item.date);
      return (
        reservationDate.getDate() === selectedDate.getDate() &&
        reservationDate.getMonth() === selectedDate.getMonth() &&
        reservationDate.getFullYear() === selectedDate.getFullYear()
      );
    });
    return filteredReservations;
  };

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
      <View
        style={{
          flexDirection: 'row',
          gap: 17,
          marginTop: 38,
          justifyContent: 'center',
        }}>
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
      <View
        style={{
          flexDirection: 'row',
          gap: 35,
          marginTop: 38,
          justifyContent: 'center',
        }}>
        {getReservationsForDate(selected).map((item, index) => (
          <ClubCards
            key={index}
            width={217}
            height={150}
            marginTop={0}
            item={item}
          />
        ))}
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
