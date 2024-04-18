import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';

import {QueueDeviceAbout} from '../../../components/cards/QueueDeviceAbout.tsx';

const DeviceScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{marginTop: 120}}>
          <Text
            style={{
              color: '#212121',
              fontSize: 32,
              fontWeight: '500',
              marginBottom: 10,
            }}>
            VƏTƏNDAŞLARIN QƏBULU
          </Text>
          <QueueDeviceAbout
            color={'#8a8686'}
            title={'Tibbi-Sosial Ekspert Komissiyası'}
            logo={'T'}
          />
          <QueueDeviceAbout
            color={'#0e57ff'}
            title={'Funksional yardimçı xidmətlər (Bank və Özünəxidmət)'}
            logo={'Y'}
          />
          <QueueDeviceAbout color={'#282828'} title={'Məşğulluq'} logo={'Q'} />
          <QueueDeviceAbout
            color={'#5e5959'}
            title={
              'Sosial müavinətlər və Azərbaycan Respublikası Prezidentinin təqaüdləri'
            }
            logo={'M'}
          />
          <QueueDeviceAbout
            color={'#031652'}
            title={'Sosial xidmətlər'}
            logo={'X'}
          />
          <QueueDeviceAbout
            color={'#756d21'}
            title={'Sosial sğorta'}
            logo={'S'}
          />
          <QueueDeviceAbout
            color={'#131212'}
            title={'Xüsusi Şərtlər'}
            logo={'H'}
          />
          <QueueDeviceAbout color={'#e3a21f'} title={'Əlillik'} logo={'E'} />
          <QueueDeviceAbout
            color={'#da2828'}
            title={'Əmək pensiyaları'}
            logo={'P'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeviceScreen;
