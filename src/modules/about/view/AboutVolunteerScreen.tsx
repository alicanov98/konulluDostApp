import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import {Controller} from 'react-hook-form';
import {SelectList} from 'react-native-dropdown-select-list';

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
      <View style={{top: 20, alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          style={{
            width: 400,
            height: 50,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: '#000',
            borderWidth: 1,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 30,
                height: 30,
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 999,
                fontSize: 20,
              }}>
              -
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#494747',
              width: 350,
              height: 50,
              paddingHorizontal: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#fff', fontSize: 17}}>
              Tibbi-Sosial Ekspert Komissiyası
            </Text>
            <Text style={{color: '#fff', fontSize: 17}}>T</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutVolunteerScreen;
