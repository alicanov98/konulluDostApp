import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import NewsCard from '../../../components/cards/NewsCard.tsx';
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <StatusBar />
      <View style={{}}>
        <Image source={require('../../../assets/images/icons/logo.png')} />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#000',
          fontWeight: 'bold',
          marginTop: 14,
        }}>
        Salam, Əhmədov Ceyhun!
      </Text>
      <View
        style={{
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
    </SafeAreaView>
  );
};

export default HomeScreen;
