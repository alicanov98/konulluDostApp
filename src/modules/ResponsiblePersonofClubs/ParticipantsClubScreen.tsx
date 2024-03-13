import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import GlobalStyles from '../../assets/globalStyles/styles.ts';
import {useRoute} from '@react-navigation/native';
import {db} from '../../fakeDb/db.ts';
import GraduateVoluntaryCard from '../responsible/component/voluntaryCards/GraduateVoluntaryCard.tsx';
import {Reservation} from '../../modules/statistic/types/StatisticTypes.ts';

const ParticipantsClubScreen = () => {
  const params: any = useRoute();
  const [loading, setLoading] = useState(false);
  const data = [
    {
      id: 1,
      name: 'Məlik',
      surname: 'Əlicanov',
      centerNumber: 4,
      dkNumber: 32,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 2,
      name: 'Ərəbov',
      surname: 'Mirsadiq',
      centerNumber: 3,
      dkNumber: 32,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 3,
      name: 'Röya',
      surname: 'Abzərova ',
      centerNumber: 6,
      dkNumber: 30,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 4,
      name: 'Əli',
      surname: 'Vahabzadə ',
      centerNumber: 6,
      dkNumber: 28,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 5,
      name: 'Səriyyə',
      surname: 'Vəliyeva',
      centerNumber: 4,
      dkNumber: 34,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 6,
      name: 'Gülgəz',
      surname: 'Əliyeva ',
      centerNumber: 4,
      dkNumber: 34,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 7,
      name: 'Hikmət',
      surname: 'Məmmədov',
      centerNumber: 4,
      dkNumber: 33,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 8,
      name: 'Nicat ',
      surname: 'Melikov ',
      centerNumber: 6,
      dkNumber: 28,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 9,
      name: 'Günay',
      surname: 'Abasova',
      centerNumber: 5,
      dkNumber: 7,
      image: require('../../assets/images/image/person2.png'),
    },
    {
      id: 10,
      name: 'Qurban',
      surname: 'Rəcəbov',
      centerNumber: 1,
      dkNumber: 57,
      image: require('../../assets/images/image/person2.png'),
    },
  ];

  const [clubData, setClubData] = useState<Reservation>({
    id: '',
    image: '',
    progresColor: '',
    date: '',
    name: '',
    datee: '',
    bgColor: '',
    color: '',
    nameColor: '',
    center: '',
    topic: '',
    text: '',
  });
  console.log(loading);
  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const data = db.clubs.find(item => item.id === params?.params?.id);
      if (data) {
        setClubData(data);
      }
      setLoading(false);
    };
    getDetails();
  }, [params?.params?.id]);
  return (
    <SafeAreaView
      key={params.id}
      style={{flex: 1, backgroundColor: GlobalStyles.colors.PureWhite}}>
      <Image
        source={clubData?.image}
        style={{
          width: '100%',
          height: 278,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
      <View style={{paddingHorizontal: 15, marginBottom: 15}}>
        <Text
          style={{
            color: '#2858EE',
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 21,
          }}>
          {clubData?.name}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'normal',
            marginTop: 17,
            marginBottom: 17,
          }}>
          {clubData?.topic}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#2858EE', fontSize: 12, fontWeight: '500'}}>
            {clubData?.datee}
          </Text>
          <Text style={{color: '#2858EE', fontSize: 12, fontWeight: '500'}}>
            {clubData?.center}
          </Text>
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 15}}>
        {data.map(item => (
          <GraduateVoluntaryCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParticipantsClubScreen;
