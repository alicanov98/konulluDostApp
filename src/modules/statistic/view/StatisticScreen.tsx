import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import React from 'react';

const StatisticScreen = () => {
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
        Statistik!
      </Text>
    </SafeAreaView>
  );
};

export default StatisticScreen;
