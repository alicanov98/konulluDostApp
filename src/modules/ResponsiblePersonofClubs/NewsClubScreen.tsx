import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import NewsCard from './component/NewsCard.tsx';

const NewsClubScreen = () => {
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
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
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
