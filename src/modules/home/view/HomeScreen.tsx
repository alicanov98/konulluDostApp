import React, {useEffect, useState} from 'react';
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

import BellIcon from '../../../assets/images/icons/bell-icon.svg';
import ClubCard from '../../../components/cards/ClubCard.tsx';
import VolunteerActivityCard from '../../../components/cards/ VolunteerActivityCard.tsx';
import Notification from '../../../components/notification/Notification.tsx';
import {MyCarousel} from '../../../components/swiper/Carousel.tsx';
import {db} from '../../../fakeDb/db.ts';
import {Clubs} from '../types/HomeTypes.tsx';

const HomeScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [homeClub, setHomeClub] = useState<Clubs[]>([]);

  useEffect(() => {
    const getClubs = async () => {
      setLoading(true);
      try {
        setHomeClub(db.clubHome);
      } catch (err) {
        console.log(err);
        console.log(loading);
      }
    };
    getClubs();
  }, []);

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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ClubCard clubHome={homeClub} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
