import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useEffect, useState} from 'react';
import {News} from '../../modules/home/types/HomeTypes.tsx';
import {db} from '../../fakeDb/db.ts';
import NewsSwiperCard from '../cards/NewsSwiperCard.tsx';

function MyCarousel() {
  const width = Dimensions.get('window').width;
  const [loading, setLoading] = useState(false);
  const [newsClub, setNewsClub] = useState<News[]>([]);
  useEffect(() => {
    const getClubs = async () => {
      setLoading(true);
      try {
        setNewsClub(db.news);
      } catch (err) {
        console.log(err);
        console.log(loading);
      }
    };
    getClubs();
  }, [loading]);
  return (
    <View style={{flex: 1}}>
      <Carousel
        blur-parallax
        loop
        autoPlay={true}
        mode="parallax"
        width={width}
        height={240}
        // autoPlay={true}
        data={newsClub}
        scrollAnimationDuration={1000}
        renderItem={({item, index}) => (
          <NewsSwiperCard item={item} key={index} />
        )}
      />
    </View>
  );
}

export default MyCarousel;
