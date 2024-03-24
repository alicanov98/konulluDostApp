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
import {Clubs} from '../../home/types/HomeTypes.tsx';
import {db} from '../../../fakeDb/db.ts';

const ClubAboutScreen = () => {
  const params = useRoute();
  const [loading, setLoading] = useState(false);
  const [clubData, setClubData] = useState<Clubs>({
    id: '',
    bgColor: '',
    colors: '',
    image: '',
    text: '',
    object: {
      image: '',
      name: '',
      text: '',
      imageList: [],
    },
  });

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const data = db.clubHome.find(item => item.id === params?.params?.id);
      if (data) {
        setClubData(data);
      }
      setLoading(false);
      console.log(loading);
    };
    getDetails();
  }, [params?.params?.id]);

  console.log('ss', clubData.object.imageList);

  return (
    <SafeAreaView
      key={params?.params?.id}
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
        source={clubData?.object.image}
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
          {clubData?.object.name}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'normal',
            marginTop: 17,
            marginBottom: 17,
          }}>
          {clubData?.object.text}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 12,
              fontWeight: '500',
            }}
          />
          <Text
            style={{
              color: '#5A5A5A',
              fontSize: 12,
              fontWeight: '500',
            }}
          />
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
            {clubData?.object?.imageList?.map(item => (
              <Image
                source={item}
                style={{
                  borderRadius: 2,
                  width: 60,
                  height: 60,
                }}
              />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubAboutScreen;
