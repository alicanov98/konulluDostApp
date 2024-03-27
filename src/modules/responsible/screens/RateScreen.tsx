import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import RateVoluntaryCard from '../component/voluntaryCards/RateVoluntaryCard.tsx';
import {voluntaryTypes} from '../type/VoluntaryListType.ts';
import {db} from '../../../fakeDb/db.ts';

const RateScreen = () => {
  const [loading, setLoading] = useState(false);
  const [voluntary, setVoluntarys] = useState<voluntaryTypes[]>([]);

  useEffect(() => {
    const getVoluntary = async () => {
      setLoading(true);
      try {
        setVoluntarys(db.voluntarys);
      } catch (err) {
        console.log(err);
        console.log(loading);
      }
    };
    getVoluntary();
  }, [loading]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 64,
      }}>
      <View style={{marginBottom: 15}}>
        <Image source={require('../../../assets/images/icons/logo.png')} />
        <View style={{position: 'relative', marginTop: 24}}>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            placeholder="ad,soyad"
          />
          <Image
            style={{position: 'absolute', top: 12.5, left: 12}}
            source={require('../../../assets/images/icons/search.png')}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {voluntary.map(item => (
          <RateVoluntaryCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 42,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 41,
    borderRadius: 5,
    borderColor: '#F6F6F6',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  scrollView: {
    paddingTop: 25,
  },
});
export default RateScreen;
