import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import ClubCards from '../../../components/cards/ClubCards.tsx';

const WeeklyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  interface Reservation {
    date: Date;
    name: string;
    datee: string;
    bgColor: string;
    color: string;
    nameColor: string;
    center: string;
    topic: string;
  }

  const reservations: Reservation[] = [
    {
      date: new Date(2024, 2, 3),
      name: 'Yaradıcılıq Klubu',
      datee: 'Çərşənbə axşamı 3 mart, 2024, 12:00',
      bgColor: '#DBF3FF',
      color: '#5A5A5A',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic: ' Ləman Hacıyeva ilə "Collaborative Art Creation"',
    },
    {
      date: new Date(2024, 2, 4),
      name: 'Fərdi İnkişaf Klubu',
      datee: 'Çərşənbə 4 mart, 2024, 15:00',
      bgColor: '#9EFFBE',
      color: '#000',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        'Vüsalə Mustafayeva və  Nabat Hüseynzadə ilə "Təhsil turu: Universitet illərini dəyərləndirən yol axtarışı"',
    },
    {
      date: new Date(2024, 2, 7),
      name: 'Xarici dil',
      datee: 'Cümə axşamı 5 mart, 2024, 12:00',
      bgColor: '#FC714E',
      color: '#fff',
      nameColor: '#fff',
      center: '5 saylı Bakı DOST Mərkəzi',
      topic:
        '"Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.',
    },
  ];

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
    const filteredReservations = reservations.filter(
      reservation =>
        reservation.date.getDate() === date.getDate() &&
        reservation.date.getMonth() === date.getMonth() &&
        reservation.date.getFullYear() === date.getFullYear(),
    );
    return filteredReservations;
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 17,
        paddingTop: 64,
        paddingBottom: 43,
      }}>
      <StatusBar />
      <View
        style={{
          flexDirection: 'column',
          gap: 20,
          marginBottom: 20,
        }}>
        <Image source={require('../../../assets/images/icons/logo.png')} />
        <ScrollView horizontal={true}>
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

      <View style={{alignItems: 'center'}}>
        <ScrollView style={{height: 626}}>
          {getReservationsForDate(selectedDate).map((item, index) => (
            <ClubCards
              key={index}
              height={250}
              width={329}
              marginTop={12}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
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
    backgroundColor: GlobalStyles.colors.CobaltBlue,
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

export default WeeklyCalendar;
