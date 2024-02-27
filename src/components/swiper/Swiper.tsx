import React from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CustomImageSwiper = () => {
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {images.map((image, index) => (
          <Image key={index} source={{uri: image}} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: width,
  },
  image: {
    width: width,
    height: 200, // Customize height according to your needs
  },
});

export default CustomImageSwiper;
