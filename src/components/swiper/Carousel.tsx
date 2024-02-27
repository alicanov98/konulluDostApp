import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsCard from '../cards/NewsCard.tsx';

interface Entry {
  title: string;
}

interface State {
  entries: Entry[];
}

export class MyCarousel extends Component<{}, State> {
  private _carousel: Carousel<Entry> | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      entries: [
        {title: 'Item 1'},
        {title: 'Item 2'},
        {title: 'Item 3'},
        {title: 'Item 4'},
      ],
    };
  }

  _renderItem = ({item, index}: {item: Entry; index: number}) => {
    return (
      <View style={styles.slide}>
        <NewsCard />
      </View>
    );
  };

  render() {
    return (
      <Carousel
        ref={(c: any) => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={380}
        itemWidth={182}
        layout={'default'}
        // firstItem={2}
        loop={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
    padding: 20,
    margin: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
