import {Image, Text, View} from 'react-native';

const VolunteerActivityCard = () => {
  return (
    <View
      style={{
        backgroundColor: '#B6BFCD10',
        borderRadius: 5,
        width: 83,
        height: 122,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 11,
        paddingRight: 11,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{
            width: 31,
            height: 32,
            borderRadius: 9999,
          }}
          source={require('../../assets/images/image/person.png')}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 8,
            color: '#424954',
            fontWeight: 'bold',
            marginTop: 14,
          }}>
          Mirmehdiyev.C
        </Text>
        <Text
          style={{
            fontSize: 8,
            color: '#424954',
            fontWeight: 'bold',
            marginTop: 1,
          }}>
          4DK-32
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#5A5A5A',
            fontWeight: 'normal',
            marginTop: 5,
            textAlign: 'center',
          }}>
          Həftənin könüllüsü
        </Text>
      </View>
    </View>
  );
};

export default VolunteerActivityCard;
