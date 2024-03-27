import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/KonulluDostNavigator.tsx';
import React from 'react';
interface NewsCardProps {
  item: {
    id: string;
    image: string;
    name: string;
    text: string;
  };
}
const NewsSwiperCard: React.FC<NewsCardProps> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <>
      {
        <TouchableOpacity
          key={item?.id}
          onPress={() => navigation.navigate('NewsScreen', {id: item?.id})}>
          <View
            style={{
              borderRadius: 30,
            }}>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: 200,
                }}
                source={item?.image}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  color: '#424954',
                  fontWeight: 'bold',
                  marginTop: 12,
                }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#5A5A5A',
                  fontWeight: 'normal',
                  marginTop: 5,
                }}>
                {item?.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      }
    </>
  );
};

export default NewsSwiperCard;
