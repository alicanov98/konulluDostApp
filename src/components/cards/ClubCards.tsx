import React from 'react';
import {Image, Text, View} from 'react-native';
import {IClubCardsProps} from '../types/types.ts';
import {formatDate} from '../../utils/utils.ts';

const ClubCards: React.FC<IClubCardsProps> = props => {
  return (
    <View
      style={[
        {flexDirection: 'row', gap: 35, marginTop: props.marginTop},
        props.containerStyle,
      ]}>
      <View
        style={[
          {
            backgroundColor: `${props.item.bgColor}`,
            borderRadius: 5,
            padding: 10,
          },
          props.style,
        ]}>
        <Text
          style={{
            color: `${props.item.nameColor}`,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {props.item.name}
        </Text>
        <Text
          style={{
            color: `${props.item.color}`,
            fontSize: 10,
            fontWeight: 'normal',
            marginTop: 6,
          }}>
          {formatDate(props.item.date, false)}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 13}}>
          <Image
            style={{zIndex: 1}}
            source={require('../../assets/images/image/person.png')}
          />
          <Image
            style={{zIndex: 2, right: 10}}
            source={require('../../assets/images/image/person.png')}
          />
          <Image
            style={{zIndex: 3, right: 20}}
            source={require('../../assets/images/image/person.png')}
          />
          <Image
            style={{zIndex: 4, right: 30}}
            source={require('../../assets/images/image/person.png')}
          />
          <View
            style={{
              zIndex: 4,
              right: 40,
              backgroundColor: '#fff',
              borderRadius: 999,
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#2858EE',
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              +3
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: `${props.item.color}`,
            fontSize: 8,
            fontWeight: '300',
            marginTop: 10,
          }}>
          {props.item.topic}
        </Text>
        <Text
          style={{
            color: `${props.item.color}`,
            fontSize: 8,
            fontWeight: '300',
            marginTop: 6,
          }}>
          {props.item.center}
        </Text>
      </View>
    </View>
  );
};

export default ClubCards;
