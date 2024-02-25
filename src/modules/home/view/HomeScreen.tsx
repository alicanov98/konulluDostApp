import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import BellIcon from '../../../assets/images/icons/bell-icon.svg';
import ClubCard from '../../../components/cards/ClubCard.tsx';
import NewsCard from '../../../components/cards/NewsCard.tsx';
import VolunteerActivityCard from '../../../components/cards/ VolunteerActivityCard.tsx';

const data = [
  {
    text: 'Yaradıcılıq',
    color: '#2858EE',
    colors: '#2858EE18',
    image: require('../../../assets/images/image/club/book.png'),
  },
  {
    text: 'Xarici dil',
    color: '#00FF55',
    colors: '#00FF5518',
    image: require('../../../assets/images/image/club/lamp.png'),
  },
  {
    text: 'Kitab',
    color: 'rgba(254, 80, 36, 1)',
    colors: 'rgba(254, 80, 36, 0.18)',
    image: require('../../../assets/images/image/club/vector.png'),
  },
  {
    text: 'Şeir',
    color: '#E64646',
    colors: '#E6464618',
    image: require('../../../assets/images/image/club/messageRigh.png'),
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: '#fff',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <StatusBar />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image source={require('../../../assets/images/icons/logo.png')} />

        <TouchableOpacity
          style={{
            position: 'relative',
          }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              right: 0,
              width: 8,
              height: 8,
              backgroundColor: '#FF0000',
              borderRadius: 999,
            }}
          />
          <BellIcon />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginTop: 14,
        }}>
        Salam, Əhmədov Ceyhun!
      </Text>
      <View
        style={{
          // backgroundColor: '#000',
          height: 220,
          marginTop: 36,
          paddingTop: 8,
          paddingBottom: 8,
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center',
        }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginTop: 14,
        }}>
        Seçilən könüllülər
      </Text>
      <View
        style={{
          marginTop: 15,
          paddingTop: 8,
          paddingBottom: 8,
          flexDirection: 'row',
          gap: 16,
          justifyContent: 'center',
        }}>
        <VolunteerActivityCard />
        <VolunteerActivityCard />
        <VolunteerActivityCard />
        <VolunteerActivityCard />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginTop: 14,
        }}>
        Klublar
      </Text>
      <ClubCard data={data} />
    </SafeAreaView>
  );
};

export default HomeScreen;
