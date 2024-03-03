import React from 'react';
import {Image, Text, View} from 'react-native';

interface ClubCardsProps {
  width: number;
  height: number;
  marginTop: number;
  item: {
    name: string;
    datee: string;
    bgColor: string;
    center: string;
    topic: string;
    color: string;
    nameColor: string;
  };
}

const ClubCards: React.FC<ClubCardsProps> = ({
  width,
  height,
  marginTop,
  item,
}) => {
  return (
    <View style={{flexDirection: 'row', gap: 35, marginTop: marginTop}}>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: `${item.bgColor}`,
          borderRadius: 5,
          padding: 10,
        }}>
        <Text
          style={{
            color: `${item.nameColor}`,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: `${item.color}`,
            fontSize: 10,
            fontWeight: 'normal',
            marginTop: 6,
          }}>
          {item.datee}
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
            color: `${item.color}`,
            fontSize: 8,
            fontWeight: '300',
            marginTop: 10,
          }}>
          {item.topic}
        </Text>
        <Text
          style={{
            color: `${item.color}`,
            fontSize: 8,
            fontWeight: '300',
            marginTop: 6,
          }}>
          {item.center}
        </Text>
      </View>
    </View>
  );
};

export default ClubCards;
