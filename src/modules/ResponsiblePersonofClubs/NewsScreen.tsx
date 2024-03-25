import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {News} from '../home/types/HomeTypes.tsx';
import {db} from '../../fakeDb/db.ts';

const NewsScreen = () => {
  const params = useRoute();
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState<News>({
    id: '',
    name: '',
    image: '',
    text: '',
  });

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const newsData = db.news.find(item => item.id === params?.params?.id);
      if (newsData) {
        setNewsData(newsData);
      }
      setLoading(false);
      console.log(loading);
    };
    getDetails();
  }, [params?.params?.id]);
  console.log(newsData);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <View style={{marginBottom: 24}}>
          <Image source={require('../../assets/images/icons/logo.png')} />
        </View>
      </View>
      <View>
        <View style={{width: '100%'}} key={newsData?.id}>
          <Image
            style={{
              width: '100%',
              height: 192,
              borderRadius: 5,
              marginBottom: 35,
            }}
            source={newsData?.image}
          />
          <View>
            <Text
              style={{
                color: '#424954',
                fontWeight: 'bold',
                fontSize: 14,
                marginBottom: 21,
              }}>
              {newsData?.name}
            </Text>
            <Text
              style={{
                color: '#5A5A5A',
                fontWeight: '500',
                fontSize: 12,
                marginBottom: 21,
              }}>
              Klublar barədə yeniliklər
            </Text>
            <Text style={{color: '#000000', fontWeight: '500', fontSize: 14}}>
              {newsData?.text}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#2858EE',
//     width: 380,
//     height: 56,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 32,
//   },
//   buttonText: {color: '#fff', fontWeight: '500', fontSize: 16},
// });

export default NewsScreen;
