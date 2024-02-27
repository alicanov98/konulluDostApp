import {Image, Text, View} from 'react-native';

const NewsCard = () => {
  return (
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
          source={require('../../assets/images/image/news1.jpg')}
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
          Prezident İlham Əliyevin səfəri
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#5A5A5A',
            fontWeight: 'normal',
            marginTop: 5,
          }}>
          "Könüllü DOST" proqramının əsas missiyası cəmiyyətin dayanıqlı
          inkişafı üçün çalışan..
        </Text>
      </View>
    </View>
  );
};

export default NewsCard;
