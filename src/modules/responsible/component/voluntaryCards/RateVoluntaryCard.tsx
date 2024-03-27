import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface RateVoluntaryProps {
  data: {
    id: string;
    name: string;
    surname: string;
    dkNumber: string;
    centerNumber: string;
    image: string;
  };
}

const RateVoluntaryCard: React.FC<RateVoluntaryProps> = ({data}) => {
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Qiymətləndir</Text>
        <Image source={require('../../../../assets/images/icons/up.png')} />
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
    fontSize: 12,
    color: '#861DBF',
    fontWeight: '400',
  },
  button: {
    paddingVertical: 8.65,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#F6F5F5',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});

export default RateVoluntaryCard;
