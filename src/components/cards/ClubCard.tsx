import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/KonulluDostNavigator.tsx';

interface ClubCardProps {
  clubHome: {
    id: string;
    bgColor: string;
    colors: string;
    image: string;
    text: string;
  }[];
}

const ClubCard: React.FC<ClubCardProps> = ({clubHome}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        height: 102,
        marginTop: 15,
        gap: 16,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {clubHome.map(item => (
        <TouchableOpacity
          key={item.id}
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('ClubAboutScreen', {id: item.id})}>
          <View
            style={[
              styles.container,
              {backgroundColor: item.bgColor, position: 'relative'},
            ]}>
            <Text
              style={[
                styles.text,
                {transform: [{rotate: '-90deg'}], left: 52},
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
                  margin: 5,
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
                zIndex: 1,
              },
            ]}>
            <View style={styles.innerContainer}>
              <Text style={[styles.plus, {color: item.bgColor}]}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    zIndex: 3,
  },
  text: {
    width: 83,
    height: 82,
    fontSize: 10,
    position: 'absolute',
    top: 10,
    zIndex: 0,
    textAlign: 'left',
    color: '#fff',
  },
});

export default ClubCard;
