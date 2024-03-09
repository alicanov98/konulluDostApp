import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';

const ClubDetailsScreen = ({route}: any) => {
  const {clubData} = route.params;
  return (
    <SafeAreaView
      key={clubData.id}
      style={{flex: 1, backgroundColor: GlobalStyles.colors.PureWhite}}>
      <Image
        source={clubData.image}
        style={{
          width: '100%',
          height: 278,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            color: '#2858EE',
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 21,
          }}>
          {clubData.name}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'normal',
            marginTop: 17,
            marginBottom: 17,
          }}>
          {clubData.text}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#2858EE', fontSize: 12, fontWeight: '500'}}>
            {clubData.datee}
          </Text>
          <Text style={{color: '#2858EE', fontSize: 12, fontWeight: '500'}}>
            {clubData.center}
          </Text>
        </View>
        <View style={{marginTop: 35}}>
          <Text style={{color: '#757575', fontSize: 20, fontWeight: 'bold'}}>
            Qalereya
          </Text>
          <Text style={{color: '#5A5A5A', fontSize: 16, fontWeight: 'normal'}}>
            Öncəki tədbirlərdən görüntülər
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{gap: 28, flexDirection: 'row', flex: 1, marginTop: 23}}>
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
            <Image style={{width: 49, height: 49}} source={clubData.image} />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: '#2858EE',
            width: 380,
            height: 56,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}>
          <Text style={{color: '#fff', fontWeight: '500', fontSize: 16}}>
            İndi qoşul +
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubDetailsScreen;
