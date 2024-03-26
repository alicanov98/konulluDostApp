import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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

const AttendanceVoluntaryCard: React.FC<CurrentVoluntaryProps> = ({data}) => {
  const [bgColor, setBgColor] = useState('#F6F5F5');
  const [color, setColor] = useState('#CCCCCC');
  useEffect(() => {
    if (data.centerNumber > 4) {
      setBgColor('#FF0000');
    } else if (data.centerNumber === 4) {
      setBgColor('#C8C117');
    } else {
      setColor('#861DBF');
      setBgColor('#F6F5F5');
    }
  }, [data.centerNumber]);

  return (
    <View style={styles.buttonContainer}>
      <View style={{flexDirection: 'row', gap: 21, alignItems: 'center'}}>
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
            <TouchableOpacity
              style={[styles.button, {backgroundColor: bgColor}]}>
              <Text style={(styles.buttonText, {color: color})}>
                Davamiyyət
              </Text>
              {data.centerNumber < 4 ? (
                <Image
                  source={require('../../../../assets/images/icons/up.png')}
                />
              ) : (
                <Image
                  source={require('../../../../assets/images/icons/up_ff.png')}
                />
              )}
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
    fontSize: 12,
    fontWeight: '400',
  },
  button: {
    paddingVertical: 8.65,
    paddingHorizontal: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
});

export default AttendanceVoluntaryCard;
