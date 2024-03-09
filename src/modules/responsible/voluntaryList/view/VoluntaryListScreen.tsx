import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import React from 'react';
import {TabResponsible} from '../../component/TabResponsible';
import GraduateVoluntaryCard from '../../component/voluntaryCards/GraduateVoluntaryCard';
import CurrentVoluntaryCard from "../../component/voluntaryCards/CurrentVoluntaryCard.tsx";

const data = [
  {
    id: 1,
    name: 'Məlik',
    surname: 'Əlicanov',
    centerNumber: 4,
    dkNumber: 32,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 2,
    name: 'Ərəbov',
    surname: 'Mirsadiq',
    centerNumber: 3,
    dkNumber: 32,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 3,
    name: 'Röya',
    surname: 'Abzərova ',
    centerNumber: 6,
    dkNumber: 30,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 4,
    name: 'Əli',
    surname: 'Vahabzadə ',
    centerNumber: 6,
    dkNumber: 28,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 5,
    name: 'Səriyyə',
    surname: 'Vəliyeva',
    centerNumber: 4,
    dkNumber: 34,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 6,
    name: 'Gülgəz',
    surname: 'Əliyeva ',
    centerNumber: 4,
    dkNumber: 34,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 7,
    name: 'Hikmət',
    surname: 'Məmmədov',
    centerNumber: 4,
    dkNumber: 33,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 8,
    name: 'Nicat ',
    surname: 'Melikov ',
    centerNumber: 6,
    dkNumber: 28,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 9,
    name: 'Günay',
    surname: 'Abasova',
    centerNumber: 5,
    dkNumber: 7,
    image: require('../../../../assets/images/image/person2.png'),
  },
  {
    id: 10,
    name: 'Qurban',
    surname: 'Rəcəbov',
    centerNumber: 1,
    dkNumber: 57,
    image: require('../../../../assets/images/image/person2.png'),
  },
];

const VoluntaryListScreen = () => {
  const [isActive, setIsActive] = React.useState(true);
  console.log(isActive);
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
          <Image source={require('../../../../assets/images/icons/logo.png')} />
          <View style={{position: 'relative', marginTop: 24}}>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              placeholder="ad,soyad"
            />
            <Image
              style={{position: 'absolute', top: 12.5, left: 12}}
              source={require('../../../../assets/images/icons/search.png')}
            />
          </View>
          <TabResponsible setIsActive={setIsActive} />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {!isActive &&
          data.map(item => <GraduateVoluntaryCard key={item.id} data={item} />)}
        {isActive &&
          data.map(item => <CurrentVoluntaryCard key={item.id} data={item} />)}
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

export default VoluntaryListScreen;
