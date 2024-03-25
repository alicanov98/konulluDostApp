import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NewsCard from './component/NewsCard.tsx';
import {News} from '../home/types/HomeTypes.tsx';
import {db} from '../../fakeDb/db.ts';

const NewsClubScreen = () => {
  const [loading, setLoading] = useState(false);
  const [newsClub, setNewsClub] = useState<News[]>([]);
  useEffect(() => {
    const getClubs = async () => {
      setLoading(true);
      try {
        setNewsClub(db.news);
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
        <ScrollView style={{marginBottom: 68}}>
          {newsClub.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </ScrollView>
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

export default NewsClubScreen;
