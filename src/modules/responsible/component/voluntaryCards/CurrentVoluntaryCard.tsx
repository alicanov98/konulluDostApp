import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../navigation/KonulluDostNavigator.tsx';

interface CurrentVoluntaryProps {
  data: {
    id: string;
    name: string;
    surname: string;
    dkNumber: string;
    centerNumber: string;
    image: string;
    club: string;
  };
}

const CurrentVoluntaryCard: React.FC<CurrentVoluntaryProps> = ({data}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.buttonContainer} key={data.id}>
      <View style={{flexDirection: 'row', gap: 9, alignItems: 'center'}}>
        <Image style={styles.imageCardPerson} source={data.image} />
        <View style={{gap: 8}}>
          <Text style={styles.name}>
            {data.name} {data.surname}
          </Text>
          <Text style={styles.dkNumber}>
            {data.centerNumber}DK-{data.dkNumber}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('StatisticProfilScreen', {id: data.id})
        }>
        <Text style={styles.buttonText}>Profilə bax</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    marginBottom: 30,
  },
  imageCardPerson: {
    borderRadius: 9999,
    height: 44,
    width: 44,
    resizeMode: 'cover',
  },
  name: {
    color: '#282F3E',
    fontSize: 18,
    fontWeight: 'normal',
  },
  dkNumber: {
    color: '#888C94',
    fontSize: 12,
    fontWeight: 'normal',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: '#861DBF',
  },
});

export default CurrentVoluntaryCard;
