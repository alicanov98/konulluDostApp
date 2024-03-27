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
import DavamiyyetIcon from '../../../assets/images/icons/davamiyyet.svg';

import QiymetlendirmeIcon from '../../../assets/images/icons/qiymetlendirme.svg';
import dayjs from 'dayjs';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useRoute} from '@react-navigation/native';
import {db} from '../../../fakeDb/db.ts';
import {voluntaryTypes} from '../../responsible/type/VoluntaryListType.ts';
import {Reservation} from '../types/StatisticTypes.ts';

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
  const params = useRoute();
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [clubsData, setClubsData] = useState<Reservation[]>([]);
  const [user, setUser] = useState<voluntaryTypes>({
    id: '',
    name: '',
    surname: '',
    centerNumber: '',
    dkNumber: '',
    image: '',
    club: '',
    clubs: [],
    position: '',
  });

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const data = db.voluntarys.find(item => item.id === params?.params?.id);
      setUser(data);

      setLoading(false);
    };
    getDetails();
  }, [params?.params?.id]);
  useEffect(() => {
    const getReservationsForDate = (dateString: string) => {
      const date = user.clubs.map(item => item);
      const selectedDate = new Date(dateString);
      const filteredReservations = date.filter(item => {
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

  return (
    <SafeAreaView
      key={params?.params?.id}
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
      </View>

      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginBottom: 14,
        }}>
        Salam, {user.name} {user.surname}!
      </Text>

      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#B755ED',
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
                fill={Number(item.degre)}
                tintColor="#B755ED"
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
            {Number(item.degre) < 50 ? (
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
