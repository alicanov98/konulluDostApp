import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../assets/globalStyles/styles.ts';
import ClubCards from '../../components/cards/ClubCards.tsx';
import {Reservation} from '../statistic/types/StatisticTypes.ts';
import {db} from '../../fakeDb/db.ts';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/KonulluDostNavigator.tsx';

const ClubEditScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const getClubs = async () => {
      setLoading(true);
      console.log(loading);
      try {
        setReservations(db.clubs);
      } catch (err) {
        console.log(err);
      }
    };
    getClubs();
  }, [loading]);

  const daysOfWeek: string[] = ['B', 'B.e', 'Ç.a', 'Ç', 'C.a', 'C', 'Ş'];

  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    return `${day}`;
  };
  const handleDayPress = (date: Date) => {
    setSelectedDate(date);
  };

  const getReservationsForDate = (date: Date): Reservation[] => {
    return reservations.filter(
      reservation =>
        new Date(reservation.date).getDate() === date.getDate() &&
        new Date(reservation.date).getMonth() === date.getMonth() &&
        new Date(reservation.date).getFullYear() === date.getFullYear(),
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 17,
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          gap: 20,
          marginBottom: 20,
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <Image source={require('../../assets/images/icons/logo.png')} />
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
              {daysOfWeek.map((day, index) => {
                const currentDate = new Date(startOfWeek);
                currentDate.setDate(startOfWeek.getDate() + index);
                const formattedDate = formatDate(currentDate);
                const isSelected =
                  currentDate.getDate() === selectedDate.getDate();
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.dayButton, isSelected && styles.selectedDay]}
                    onPress={() => handleDayPress(currentDate)}>
                    <Text
                      style={[
                        styles.dateText,
                        isSelected && styles.selectedText,
                      ]}>
                      {formattedDate}
                    </Text>
                    <Text
                      style={[
                        styles.dayText,
                        isSelected && styles.selectedDayText,
                      ]}>
                      {day}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      <ScrollView
        style={{backgroundColor: 'transparent', width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        {getReservationsForDate(selectedDate).map((item, index) => (
          <ClubCards
            key={index}
            style={{width: 329, height: 250, marginTop: 12}}
            item={item}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewClubAddScreen')}
        style={{
          backgroundColor: '#861DBF',
          width: 380,
          height: 56,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 32,
        }}>
        <Text style={{color: '#fff', fontWeight: '500', fontSize: 16}}>
          +Klub əlavə et
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 7,
  },
  dayContainer: {
    flex: 1,
    marginBottom: 20,
  },
  dayText: {
    color: '#B6B3B3',
    fontSize: 16,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: GlobalStyles.colors.PureBlack,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: GlobalStyles.colors.PureWhite,
  },
  dayButton: {
    width: 54,
    height: 75,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FBFF',
  },
  selectedDay: {
    backgroundColor: GlobalStyles.colors.purple,
  },
  selectedDayText: {
    color: '#fff',
  },
  selectedDateContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'column',
    color: GlobalStyles.colors.CobaltBlue,
  },
});

export default ClubEditScreen;
