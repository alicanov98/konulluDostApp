import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

interface ClubCardProps {
  data: {color: string; colors: string; image: string; text: string}[];
}

const ClubCard: React.FC<ClubCardProps> = ({data}) => {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
      }}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={[
              styles.container,
              {backgroundColor: item.color, position: 'relative'},
            ]}>
            <View
              style={{
                width: 97,
                paddingLeft: 9,
                justifyContent: 'flex-start',
              }}>
              <Image
                style={{
                  marginTop: 9,
                }}
                source={item.image}
              />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
          <View
            style={[
              styles.container,
              {
                backgroundColor: item.colors,
                position: 'absolute',
                top: 40,
                width: 82,
                height: 83,
                zIndex: -1,
              },
            ]}>
            <View style={styles.innerContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: 82,
    height: 97,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    height: 82,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  plus: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 24,
  },
  text: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default ClubCard;
