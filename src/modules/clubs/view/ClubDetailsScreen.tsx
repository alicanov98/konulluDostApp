import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import {useRoute} from '@react-navigation/native';
import {Reservation} from '../../statistic/types/StatisticTypes.ts';
import {db} from '../../../fakeDb/db.ts';

const ClubDetailsScreen = () => {
  const params: any = useRoute();
  const [loading, setLoading] = useState(false);
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
    degree: '',
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
        source={require('../../../assets/images/image/linergradients.png')}
        style={{
          width: '100%',
          height: 278,
          position: 'absolute',
          zIndex: 1,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <Image
        source={clubData?.image}
        style={{
          width: '100%',
          height: 278,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            color: '#2E2E2E',
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
          {clubData?.text}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 12,
              fontWeight: '500',
            }}>
            {clubData?.datee}
          </Text>
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 12,
              fontWeight: '500',
            }}>
            {clubData?.center}
          </Text>
        </View>
        <View style={{marginTop: 35}}>
          <Text style={{color: '#757575', fontSize: 20, fontWeight: 'bold'}}>
            Qalereya
          </Text>
          <Text style={{color: '#5A5A5A', fontSize: 16, fontWeight: 'normal'}}>
            Öncəki tədbirlərdən görüntülər
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{gap: 28, flexDirection: 'row', flex: 1, marginTop: 23}}>
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
            <Image
              source={clubData?.image}
              style={{
                borderRadius: 2,
                width: 60,
                height: 60,
              }}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: GlobalStyles.colors.purple,
            width: 380,
            height: 56,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}>
          <Text style={{color: '#fff', fontWeight: '500', fontSize: 16}}>
            İndi qoşul +
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubDetailsScreen;
