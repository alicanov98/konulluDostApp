import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React from 'react';
import GlobalStyles from '../../../../assets/globalStyles/styles.ts';

const AttendanceScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <View>
        <Image source={require('../../../../assets/images/icons/logo.png')} />
        <View style={{position: 'relative', marginTop: 24}}>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            placeholder="ad,soyad"
          />
          <Image
            style={{position: 'absolute', top: 12.5, left: 12}}
            source={require('../../../../assets/images/icons/search.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 42,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 41,
    borderRadius: 5,
    borderColor: '#F6F6F6',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
});

export default AttendanceScreen;
