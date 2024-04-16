import { SafeAreaView, StatusBar, Text, View } from "react-native";

import React from 'react';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import CarusellTwo from '../../../components/swiper/CarusellTwo.tsx';

const AboutVolunteerScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingLeft: 23,
        paddingRight: 23,
        paddingTop: 64,
        paddingBottom: 43,
        backgroundColor: GlobalStyles.colors.PureWhite,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'rgba(0, 0, 0, .2)'}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Könüllü Dost Haqqında!
        </Text>
      </View>
      <View style={{width: '100%', height: 300, backgroundColor: 'red'}}>
      </View>
    </SafeAreaView>
  );
};

export default AboutVolunteerScreen;
