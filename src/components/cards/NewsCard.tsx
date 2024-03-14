import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/KonulluDostNavigator.tsx';

const NewsCard = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsEditScreen')}>
      <View
        style={{
          borderRadius: 30,
          width: 182,
          height: 176,
          marginLeft: 30,
          marginRight: 30,
        }}>
        <View>
          <Image
            style={{
              width: 182,
              height: 111,
            }}
            source={require('../../assets/images/image/image1News.jpg')}
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
            Könüllü Klubları
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: '#5A5A5A',
              fontWeight: 'normal',
              marginTop: 5,
            }}>
            “Könüllü Klubları” layihəsi çərçivəsində növbəti təlim kecirildi
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
