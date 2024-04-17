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

// @ts-ignore
import BellIcon from '../../../assets/images/icons/bell-icon.svg';
import ClubCard from '../../../components/cards/ClubCard.tsx';
import VolunteerActivityCard from '../../../components/cards/ VolunteerActivityCard.tsx';
import Notification from '../../../components/notification/Notification.tsx';
import {db} from '../../../fakeDb/db.ts';
import {ClubsHome} from '../types/HomeTypes.tsx';
import MyCarousel from '../../../components/swiper/Carousel.tsx';
import {voluntaryTypes} from '../../responsible/type/VoluntaryListType.ts';

const HomeScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [homeClub, setHomeClub] = useState<ClubsHome[]>([]);
  const [topFourVoluntarys, setTopFourVoluntarys] = useState<voluntaryTypes[]>(
    [],
  );
  const [voluntarys, setVoluntarys] = useState<voluntaryTypes[]>([]);
  useEffect(() => {
    const getClubs = async () => {
      setLoading(true);
      try {
        setVoluntarys(db.voluntarys);
      } catch (err) {
        console.log(err);
        console.log(loading);
      }
    };
    getClubs();
    const sortedVoluntarys = voluntarys.sort(
      (a, b) => b.clubs[6].degre - a.clubs[6].degre,
    );
    const topFour = sortedVoluntarys.slice(0, 4);
    setTopFourVoluntarys(topFour);
  }, [loading, voluntarys]);

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
  }, [loading]);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'rgba(0, 0, 0, .2)'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 17,
          paddingRight: 17,
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
          paddingLeft: 17,
          paddingRight: 17,
        }}>
        Salam, Əlicanov Məlik!
      </Text>
      <View
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          flexDirection: 'row',
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
          paddingLeft: 17,
          paddingRight: 17,
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
        {topFourVoluntarys.map((voluntary, index) => (
          <VolunteerActivityCard
            key={voluntary.id}
            activity={
              index === 0
                ? 'İlin   könüllüsü'
                : index === 1
                ? 'Ayın könüllüsü'
                : index === 2
                ? 'Həftənin könüllüsü'
                : index === 3
                ? 'Günün könüllüsü'
                : ''
            }
            name={`${voluntary.name} ${voluntary.surname}`}
            center={`${voluntary.centerNumber}DK-${voluntary.dkNumber}`}
          />
        ))}
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          marginTop: 14,
          paddingLeft: 17,
          paddingRight: 17,
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
