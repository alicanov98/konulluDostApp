import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IClubCardsProps} from '../types/types';
import {formatDate} from '../../utils/utils';
import * as Progress from 'react-native-progress';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/KonulluDostNavigator';
import GlobalStyles from '../../assets/globalStyles/styles.ts';
const ClubCards: React.FC<IClubCardsProps> = props => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [pageName, setPageName] = useState<boolean>(false);
  const [screenParams, setScreenParams] = useState<boolean>(true);
  const params = useRoute();

  useEffect(() => {
    if (params.name === 'ClubsScreen') {
      setScreenParams(false);
      setPageName(true);
    } else if (params.name === 'ClubEditScreen') {
      setPageName(true);
      setScreenParams(true);
    } else {
      setPageName(false);
      setScreenParams(true);
    }
  }, [params.name]);

  return (
    <View
      key={props.item.id}
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
          {formatDate(props.item.date, true)}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 13}}>
          {/* Images */}
          <Image
            source={require('../../assets/images/image/person.png')}
            style={{right: 0}}
          />
          <Image
            source={require('../../assets/images/image/person.png')}
            style={{right: 12}}
          />
          <Image
            source={require('../../assets/images/image/person.png')}
            style={{right: 24}}
          />
          <Image
            source={require('../../assets/images/image/person.png')}
            style={{right: 36}}
          />
          <View
            style={{
              right: 48,
              width: 35,
              height: 35,
              backgroundColor: '#fff',
              borderRadius: 999,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#B755ED', fontSize: 13, fontWeight: '500'}}>
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
                3 nəfər +
              </Text>
            </View>
            <Progress.Bar
              progress={0.8}
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
                onPress={() =>
                  screenParams
                    ? navigation.navigate('ParticipantsClubScreen', {
                        id: String(props.item.id),
                      })
                    : navigation.navigate('ClubDetailsScreen', {
                        id: String(props.item.id),
                      })
                }
                style={{
                  marginTop: 18,
                  width: 134,
                  height: 26,
                  borderRadius: 12,
                  backgroundColor: GlobalStyles.colors.purple,
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
