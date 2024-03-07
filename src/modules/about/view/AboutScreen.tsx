import {Image, SafeAreaView, StatusBar, View} from 'react-native';

import React from 'react';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';

const AboutScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
        paddingBottom: 43,
        backgroundColor: GlobalStyles.colors.PureWhite,
      }}>
      <View>
        <Image
          source={require('../../../assets/images/image/personNewImg.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
