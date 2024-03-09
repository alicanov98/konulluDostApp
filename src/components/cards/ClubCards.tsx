import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IClubCardsProps} from '../types/types';
import {formatDate} from '../../utils/utils';
import * as Progress from 'react-native-progress';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/KonulluDostNavigator';
const ClubCards: React.FC<IClubCardsProps> = props => {
  const navigate = useRoute();
  const [pageName, setPageName] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (navigate.name === 'ClubsScreen') {
      setPageName(true);
    } else {
      setPageName(false);
    }
  }, [navigate.name]);

  const goToClubDetailsScreen = () => {
    // @ts-ignore
    navigation.navigate('ClubDetailsScreen', {clubData: props.item});
  };

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
          {/* Images */}
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
        {pageName && (
          <View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  marginRight: 11,
                  marginBottom: 8,
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#5A5A5A',
                }}>
                2 nəfər +
              </Text>
            </View>
            <Progress.Bar
              progress={0.5}
              width={300}
              height={10}
              borderRadius={72}
              animated={true}
              color={props.item.progresColor}
              unfilledColor={'#fff'}
              borderColor={props.item.bgColor}
            />
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={goToClubDetailsScreen}
                style={{
                  marginTop: 18,
                  width: 134,
                  height: 26,
                  borderRadius: 12,
                  backgroundColor: '#2858EE',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  Daha çoxunu gör...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ClubCards;
