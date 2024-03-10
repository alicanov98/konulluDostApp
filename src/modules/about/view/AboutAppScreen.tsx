import {SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';

const AboutAppScreen = () => {
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
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          App Haqqında!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutAppScreen;
