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
import {Reservation} from '../types/StatisticTypes.ts';
import dayjs from 'dayjs';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

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

const reservations: Reservation[] = [
  {
    id: 0,
    date: new Date(2024, 2, 3),
    name: 'Yaradıcılıq Klubu',
    bgColor: '#DBF3FF',
    color: '#5A5A5A',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' Ləman Hacıyeva ilə "Collaborative Art Creation"',
    degre: 32,
  },
  {
    id: 1,
    date: new Date(2024, 2, 4),
    name: 'Fərdi İnkişaf Klubu',
    bgColor: '#9EFFBE',
    color: '#000',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' "Universitet illərini dəyərləndirən yol axtarışı"',
    degre: 42,
  },
  {
    id: 2,
    date: new Date(2024, 2, 5),
    name: 'Xarici dil',
    bgColor: '#FC714E',
    color: '#fff',
    nameColor: '#fff',
    center: '5 saylı Bakı DOST Mərkəzi',
    topic: '"Easiest ways to learn English" adlı təlim keçəcək.',
    degre: 52,
  },
  {
    id: 3,
    date: new Date(2024, 2, 6),
    name: 'Yaradıcılıq Klubu',
    bgColor: '#DBF3FF',
    color: '#5A5A5A',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' Ləman Hacıyeva ilə "Collaborative Art Creation"',
    degre: 62,
  },
  {
    id: 4,
    date: new Date(2024, 2, 7),
    name: 'Fərdi İnkişaf Klubu',
    bgColor: '#9EFFBE',
    color: '#000',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' "Universitet illərini dəyərləndirən yol axtarışı"',
    degre: 72,
  },
  {
    id: 5,
    date: new Date(2024, 2, 8),
    name: 'Xarici dil',
    bgColor: '#FC714E',
    color: '#fff',
    nameColor: '#fff',
    center: '5 saylı Bakı DOST Mərkəzi',
    topic: '"Easiest ways to learn English" adlı təlim keçəcək.',
    degre: 82,
  },
  {
    id: 6,
    date: new Date(2024, 2, 9),
    name: 'Yaradıcılıq Klubu',
    bgColor: '#DBF3FF',
    color: '#5A5A5A',
    nameColor: '#757575',
    center: '4 saylı Bakı DOST Mərkəzi',
    topic: ' Ləman Hacıyeva ilə "Collaborative Art Creation"',
    degre: 92,
  },
];

const StatisticScreen: React.FC = () => {
  const [selected, setSelected] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [clubsData, setClubsData] = useState<Reservation[]>([]);

  useEffect(() => {
    const getReservationsForDate = (dateString: string) => {
      const selectedDate = new Date(dateString);
      console.log(selectedDate);
      const filteredReservations = reservations.filter(item => {
        const reservationDate = new Date(item.date);
        return (
          reservationDate.getDate() === selectedDate.getDate() &&
          reservationDate.getMonth() === selectedDate.getMonth() &&
          reservationDate.getFullYear() === selectedDate.getFullYear()
        );
      });
      setClubsData(filteredReservations);
    };
    getReservationsForDate(selected ? selected : dayjs().format('YYYY-MM-DD'));
  }, [selected]);

  // @ts-ignore
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
      {clubsData.map(item => (
        <View
          style={{
            flexDirection: 'row',
            gap: 35,
            marginTop: 38,
            justifyContent: 'center',
          }}>
          <ClubCards
            key={item.id}
            item={item}
            style={{width: 217, height: 150, marginTop: 0}}
          />
          <View
            style={{
              width: 127,
              height: 150,
              backgroundColor: '#F0EFEF',
              borderRadius: 10,
              padding: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                transform: 'rotate(90deg)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AnimatedCircularProgress
                size={75}
                width={5}
                fill={item.degre}
                tintColor="#2858EE"
                onAnimationComplete={() => {}}
                backgroundColor="#fff"
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 35,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                }}>
                Aktivlik
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                }}>
                {item.degre}%
              </Text>
            </View>
            {item.degre < 50 ? (
              <Text
                style={{
                  color: '#000',
                  fontSize: 8,
                  paddingTop: 12,
                  textAlign: 'center',
                }}>
                Bu gün aktivliyin biraz zəifdir. Ancaq ruhdan düşmək lazım
                deyil!
              </Text>
            ) : (
              <Text
                style={{
                  color: '#000',
                  fontSize: 8,
                  paddingTop: 12,
                  textAlign: 'center',
                }}>
                Bu gün aktivliyin yaxşıdır.Dahada aktiv ola bilərsən!
              </Text>
            )}
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default StatisticScreen;
