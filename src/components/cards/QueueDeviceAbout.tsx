import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  color: string;
  title: string;
  logo: string;
}

export const QueueDeviceAbout: React.FC<Props> = ({color, title, logo}) => {
  return (
    <View style={{alignItems: 'center', marginBottom: 15}}>
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
              textAlign: 'center',
              width: 30,
              height: 30,
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 999,
              fontSize: 20,
            }}>
            t
          </Text>
        </View>
        <View
          style={{
            backgroundColor: color,
            width: 350,
            height: 50,
            paddingHorizontal: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#fff', fontSize: 17}}>{title}</Text>
          <Text style={{color: '#fff', fontSize: 17}}>{logo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
