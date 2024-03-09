import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface CurrentVoluntaryProps {
  data: {
    id: number;
    name: string;
    surname: string;
    dkNumber: number;
    centerNumber: number;
    image: any;
  };
}

const CurrentVoluntaryCard: React.FC<CurrentVoluntaryProps> = ({data}) => {
  return (
    <View style={styles.buttonContainer}>
      <View
        style={{
          flexDirection: 'row',
          gap: 21,
          alignItems: 'center',
        }}>
        <Image style={styles.imageCardPerson} source={data.image} />

        <View style={{flex: 1, gap: 15}}>
          <View style={{gap: 3}}>
            <Text style={styles.name}>
              {data.name} {data.surname}
            </Text>
            <Text style={styles.dkNumber}>
              {data.centerNumber}DK-{data.dkNumber}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 7,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={styles.buttonRate}>
              <Image
                source={require('../../../../assets/images/icons/star.png')}
              />
              <Text style={styles.buttonRateText}>Qiymətləndir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Profilə bax</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 87,
    marginBottom: 30,
  },
  imageCardPerson: {
    borderRadius: 9999,
    height: 83,
    width: 87,
    resizeMode: 'cover',
  },
  name: {
    color: '#282F3E',
    fontSize: 14,
    fontWeight: 'normal',
  },
  dkNumber: {
    color: '#888C94',
    fontSize: 12,
    fontWeight: 'normal',
  },
  buttonText: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '500',
  },
  button: {
    width: 75,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#2858EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRate: {
    width: 81,
    height: 28,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2858EE',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  buttonRateText: {
    fontSize: 8,
    color: '#5A5A5A',
    fontWeight: '500',
  },
});

export default CurrentVoluntaryCard;
