import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import BellIcon from '../../../assets/images/icons/bell-icon.svg';
import ClubCard from '../../../components/cards/ClubCard.tsx';
import VolunteerActivityCard from '../../../components/cards/ VolunteerActivityCard.tsx';
import Notification from '../../../components/notification/Notification.tsx';
import {MyCarousel} from '../../../components/swiper/Carousel.tsx';

const data = [
  {
    text: 'Yaradıcılıq',
    color: '#2858EE',
    colors: '#2858EE18',
    image: require('../../../assets/images/image/club/book.png'),
    margin: 5,
  },
  {
    text: 'Xarici dil',
    color: '#00FF55',
    colors: '#00FF5518',
    image: require('../../../assets/images/image/club/lamp.png'),
    margin: 0,
  },
  {
    text: 'Kitab',
    color: 'rgba(254, 80, 36, 1)',
    colors: 'rgba(254, 80, 36, 0.18)',
    image: require('../../../assets/images/image/club/vector.png'),
    margin: 5,
  },
  {
    text: 'Şeir',
    color: '#E64646',
    colors: '#E6464618',
    image: require('../../../assets/images/image/club/messageRigh.png'),
    margin: 5,
  },
];

const HomeScreen = () => {
  const [isActive, setIsActive] = useState(false);
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
          onPress={() => setIsActive(!isActive)}
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
        <Modal visible={isActive} transparent={true} animationType="fade">
          <View
            style={{
              width: 420,
              height: 870,
              backgroundColor: 'rgba(89, 89, 89, 0.5)',
              position: 'absolute',
              alignItems: 'center',
              zIndex: 10,
            }}>
            <View
              style={{
                width: 300,
                height: 70,
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => setIsActive(!isActive)}>
                <Text style={{color: '#fff'}}>Close</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </ScrollView>
          </View>
        </Modal>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginTop: 14,
        }}>
        Salam, Əlicanov Məlik!
      </Text>
      <View
        style={{
          height: 220,
          marginTop: 36,
          paddingTop: 8,
          paddingBottom: 8,
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center',
        }}>
        <MyCarousel />
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
