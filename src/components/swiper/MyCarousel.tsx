import React, {useState, useEffect} from 'react';
import {Dimensions, Text, useWindowDimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';
import {IActivities, News} from '../../modules/home/types/HomeTypes.tsx';
import NewsSwiperCard from '../cards/NewsSwiperCard.tsx';
import RenderHtml from 'react-native-render-html';
import {HomeService} from '../../modules/home/service/HomeService.tsx';

export default function MyCarousel() {
  const [loading, setLoading] = useState(false);
  const [newsClub, setNewsClub] = useState<News[]>([]);
  const [data, setData] = useState(null);
  const {width} = useWindowDimensions();
  const [activities, setActivities] = useState<Array<IActivities>>([]);
  const [htmlSource, setHtmlSource] = useState('');

  useEffect(() => {
    const getActivitiesList = async () => {
      setLoading(true);
      try {
        const response = await HomeService.activitiesList();
        const htmlResponse = await HomeService.projectHTML();
        setActivities(response);
        setHtmlSource(htmlResponse);
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getActivitiesList();
  }, []);

  return (
    <View style={{flex: 1}}>
      <RenderHtml contentWidth={width} source={htmlSource} />
      {/*<Carousel*/}
      {/*  blur-parallax*/}
      {/*  loop*/}
      {/*  autoPlay={true}*/}
      {/*  mode="parallax"*/}
      {/*  width={width}*/}
      {/*  height={240}*/}
      {/*  // autoPlay={true}*/}
      {/*  data={newsClub}*/}
      {/*  scrollAnimationDuration={1000}*/}
      {/*  renderItem={({item, index}) => (*/}
      {/*    <NewsSwiperCard item={item} key={index} />*/}
      {/*  )}*/}
      {/*/>*/}
    </View>
  );
}
