import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

interface ClubCardProps {
  data: {
    id: number;
    color: string;
    colors: string;
    image: string;
    text: string;
    margin: number;
  }[];
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
      {data.map(item => (
        <View
          key={item.id}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={[
              styles.container,
              {backgroundColor: item.color, position: 'relative'},
            ]}>
            <Text
              style={[
                styles.text,
                {transform: [{rotate: '-90deg'}], left: 57},
              ]}>
              {item.text}
            </Text>
            <View
              style={{
                width: 75,
                paddingRight: 12,
              }}>
              <Image
                style={{
                  margin: item.margin,
                }}
                source={item.image}
              />
            </View>
          </View>

          <View
            style={[
              styles.container,
              {
                backgroundColor: item.colors,
                position: 'absolute',
                top: 40,
                width: 83,
                height: 82,
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
    width: 75,
    height: 101,
  },
  innerContainer: {
    height: 85,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  plus: {
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 24,
  },
  text: {
    width: 83,
    height: 82,
    fontSize: 10,
    position: 'absolute',
    top: 15,
    zIndex: 0,
    padding: 0,
    margin: 0,
    textAlign: 'left',
  },
});

export default ClubCard;
