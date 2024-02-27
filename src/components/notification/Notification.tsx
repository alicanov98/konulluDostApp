import {Image, Text, View} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <View
      style={{
        width: 340,
        height: 140,
        borderRadius: 15,
        backgroundColor: 'rgba(252, 252, 252, 1)',
        top: 20,
        marginBottom: 15,
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image source={require('../../assets/images/image/SmallIcon.png')} />
          <Text style={{color: '#2858EE'}}>Könüllü Dost</Text>
          <Text style={{color: '#595959'}}>indicə</Text>
        </View>
        <Image source={require('../../assets/images/image/Down.png')} />
      </View>
      <Text style={{color: '#000', fontSize: 15}}>Salam, Əhmədova C.</Text>
      <Text style={{color: '#595959', fontSize: 13}}>
        Bu həftə aktivliyin zəif görünür.
      </Text>
    </View>
  );
};
export default Notification;
