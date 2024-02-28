import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales.az = {
  monthNames: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'İyun',
    'İyul',
    'Avqust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr',
  ],
  monthNamesShort: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'İyun',
    'İyul',
    'Avq',
    'Sen',
    'Okt',
    'Noy',
    'Dek',
  ],
  dayNames: [
    'Bazar',
    'Bazar ertəsi',
    'Çərşənbə axşamı',
    'Çərşənbə',
    'Cümə axşamı',
    'Cümə',
    'Şənbə',
  ],
  dayNamesShort: ['B.', 'B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.'],
  today: 'Bu gün',
};
LocaleConfig.defaultLocale = 'az';

const ClubsScreen: React.FC = () => {
  const [items, setItems] = useState<any>({});

  const loadItems = (day: any) => {
    setTimeout(() => {
      const newItems = {
        [day.dateString]: [
          {name: 'Yaradıcılıq Klubu ', time: '12:00'},
          {name: 'Kitab Klubu ', time: '14:00'},
        ],
      };
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item: any) => (
    <View
      style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
        {item.name}
      </Text>
      <Text style={{fontSize: 14, color: '#000'}}>Saat: {item.time}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 17,
          paddingTop: 64,
          paddingBottom: 20,
        }}>
        <Image source={require('../../../assets/images/icons/logo.png')} />
        <TouchableOpacity
          style={{
            position: 'relative',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#424954',
          fontWeight: 'bold',
          paddingHorizontal: 17,
          marginBottom: 10,
        }}>
        Salam, Əlicanov.M!
      </Text>

      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2024-02-29'}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ClubsScreen;
