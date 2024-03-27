import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {TabResponsible} from './TabResponsible.tsx';
import GraduateVoluntaryCard from '../component/voluntaryCards/GraduateVoluntaryCard.tsx';
import CurrentVoluntaryCard from '../component/voluntaryCards/CurrentVoluntaryCard.tsx';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/KonulluDostNavigator.tsx';
import {voluntaryTypes} from '../type/VoluntaryListType.ts';
import {db} from '../../../fakeDb/db.ts';

const VoluntaryListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isActive, setIsActive] = React.useState(true);
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
      <View
        style={{
          width: '100%',
        }}>
        <View>
          <Image source={require('../../../assets/images/icons/logo.png')} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
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

            <TouchableOpacity
              style={[styles.dropDowninput, {borderColor: '#861DBF'}]}
              onPress={() => navigation.navigate('VoluntarysClubListScreen')}>
              <Text style={styles.inputText}>Klublar</Text>
            </TouchableOpacity>
          </View>
          <TabResponsible setIsActive={setIsActive} />
          {isActive && (
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity
                style={styles.buttonRate}
                onPress={() => navigation.navigate('RateScreen')}>
                <Image
                  source={require('../../../assets/images/icons/star.png')}
                />
                <Text style={styles.buttonRateText}>Qiymətləndir</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonRate}
                onPress={() => navigation.navigate('AttendanceScreen')}>
                <Image
                  source={require('../../../assets/images/icons/star.png')}
                />
                <Text style={styles.buttonRateText}>Davamiət</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {!isActive &&
          voluntary.map(item => (
            <GraduateVoluntaryCard key={item.id} data={item} />
          ))}
        {isActive &&
          voluntary.map(item => (
            <CurrentVoluntaryCard key={item.id} data={item} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 230,
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
  dropDowninput: {
    width: 150,
    height: 42,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#861DBF',
    alignItems: 'center',
    position: 'relative',
    marginTop: 24,
  },
  dropDownBoxDk: {
    width: 150,
    height: 165,
    position: 'absolute',
    borderColor: '#861DBF',
    zIndex: 5,
    backgroundColor: '#fff',
    top: 57,
  },
  scrollView: {
    paddingTop: 25,
  },
  buttonRate: {
    width: 81,
    height: 28,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#861DBF',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  inputText: {color: '#000', marginBottom: 5, fontSize: 14},
  buttonRateText: {
    fontSize: 8,
    color: '#5A5A5A',
    fontWeight: '500',
  },
});

export default VoluntaryListScreen;
