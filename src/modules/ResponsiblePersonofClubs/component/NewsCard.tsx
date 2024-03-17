import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Share from 'react-native-share';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/KonulluDostNavigator.tsx';

const NewsCard = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleShare = async () => {
    const title = 'Könüllü Klublar';
    const content = '“Fərdi İnkşaf” layihəsi çərçivəsində növbəti təlim';
    const time = '11 saat əvvəl';
    const message = `Xəbər: ${title}\nHaqqında: ${content}\nPaylaşıldı: ${time}`;

    const shareOptions = {
      message: message,
      url: 'https://konullu.dost.gov.az/fealiyyetimiz/7',
    };

    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(shareResponse));
    } catch (error) {
      // @ts-ignore
      console.log('Paylaşım hatası:', error.message);
    }
  };

  const handleEditPress = () => {
    navigation.navigate('NewsEditScreen');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderDropdown = () => {
    if (isDropdownOpen) {
      return (
        <View
          style={{
            width: 120,
            position: 'absolute',
            borderRadius: 10,
            top: 50,
            right: 16,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            padding: 10,
          }}>
          <TouchableOpacity
            style={{
              marginBottom: 10,
            }}
            onPress={handleEditPress}>
            <Text style={{color: 'white'}}>Redakte et</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: 'white'}}>Sil</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          borderRadius: 10,
          overflow: 'hidden',
          width: '100%',
          height: 150,
          marginVertical: 5,
        }}>
        <Image
          style={{
            position: 'absolute',
            borderRadius: 10,
          }}
          resizeMode="cover"
          source={require('../../../assets/images/image/image1News.jpg')}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 10,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 16,
                padding: 10,
              }}>
              Könüllü Klublar
            </Text>
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity onPress={handleShare}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../assets/images/icons/share.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleDropdown}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../assets/images/icons/pngwing.com.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: 14,
              padding: 10,
            }}>
            “Fərdi İnkşaf” layihəsi çərçivəsində növbəti təlim
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: 10,
              padding: 10,
            }}>
            11 saat əvvəl
          </Text>
        </View>
      </View>
      {renderDropdown()}
    </TouchableOpacity>
  );
};

export default NewsCard;
