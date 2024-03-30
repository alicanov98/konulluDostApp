import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CurrentVoluntaryProps {
  data: {
    id: string;
    name: string;
    surname: string;
    dkNumber: string;
    centerNumber: string;
    image: string;
  };
}

const AttendanceVoluntaryCard: React.FC<CurrentVoluntaryProps> = ({data}) => {
  const [bgColor, setBgColor] = useState('#F6F5F5');
  const [color, setColor] = useState('#fff');
  useEffect(() => {
    if (data.centerNumber > '4') {
      setBgColor('#FF0000');
    } else if (data.centerNumber === '4') {
      setBgColor('#C8C117');
    } else {
      setColor('#861DBF');
      setBgColor('#F6F5F5');
    }
  }, [data.centerNumber]);

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
        style={[styles.button, {backgroundColor: bgColor, flexDirection:'row',alignItems:'center',gap:10}]}>
        <Text style={(styles.buttonText, {color: color})}>Davamiyyət</Text>
        {data.centerNumber < '4' ? (
          <Image source={require('../../../../assets/images/icons/up.png')} />
        ) : (
          <Image
            source={require('../../../../assets/images/icons/up_ff.png')}
          />
        )}
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
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: '#861DBF',
  },
});

export default AttendanceVoluntaryCard;
