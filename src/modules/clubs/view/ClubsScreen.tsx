import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../../assets/globalStyles/styles.ts';
import ClubCards from '../../../components/cards/ClubCards.tsx';

const WeeklyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  interface Reservation {
    id: number;
    image: string;
    progresColor: string;
    date: Date;
    name: string;
    datee: string;
    bgColor: string;
    color: string;
    nameColor: string;
    center: string;
    topic: string;
    text: string;
  }

  const reservations: Reservation[] = [
    {
      id: 1,
      image: require('../../../assets/images/image/club/yaradiciliqGitar.jpeg'),
      date: new Date(2024, 2, 3),
      name: 'Yaradıcılıq Klubu',
      datee: 'Ç, 3 mart, 2024, 12:00',
      bgColor: '#DBF3FF',
      progresColor: '#C2E3E8',
      color: '#5A5A5A',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        ' "Yaradıcılıq" klubunda "Gitaraya Akkordla Başlayaq" adlı master-klass keçiriləcək.',
      text: '"Yaradıcılıq" klubunda "Gitaraya Akkordla Başlayaq" adlı master-klass keçiriləcək. Gitara aləti ilə ilk dəfə tanış olacaq gəncləri maraqlandıracaq bu təlimdə gitara alətinin tarixi və ilkin anlayışlar barədə danışılacaq.',
    },
    {
      id: 2,
      image: require('../../../assets/images/image/club/ferdiInksaf.jpeg'),
      date: new Date(2024, 2, 4),
      name: 'Fərdi İnkişaf Klubu',
      datee: 'Ç, 4 mart, 2024, 15:00',
      bgColor: '#9EFFBE',
      progresColor: '#00FF55',
      color: '#000',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        'Vüsalə Mustafayeva və  Nabat Hüseynzadə ilə "Təhsil turu: Universitet illərini dəyərləndirən yol axtarışı"',
      text: '"Fərdi İnkişaf" klubunda "ROOF Academic Training" şirkətinin Xaricdə təhsil şöbəsinin rəhbəri Vüsalə Mustafayeva və Əməliyyatlar üzrə rəhbəri Nabat Hüseynzadə ilə "Təhsil turu: Universitet illərini dəyərləndirən yol axtarışı" adlı təlimdə görüşəcəyik.Təlim zamanı xaricdə təhsil və gənclərin universitet illərini necə səmərəli keçirmələri ilə bağlı bir çox mövzulara toxunulacaq.🤓',
    },
    {
      id: 3,
      image: require('../../../assets/images/image/club/xariciDil.jpeg'),
      date: new Date(2024, 2, 7),
      name: 'Xarici dil',
      datee: 'C, 5 mart, 2024, 12:00',
      bgColor: '#FC714E',
      progresColor: '#D25600',
      color: '#fff',
      nameColor: '#fff',
      center: '5 saylı Bakı DOST Mərkəzi',
      topic:
        '"Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.',
      text: 'Xarici Dil klubunda "Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.✌️',
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
    return reservations.filter(
      reservation =>
        reservation.date.getDate() === date.getDate() &&
        reservation.date.getMonth() === date.getMonth() &&
        reservation.date.getFullYear() === date.getFullYear(),
    );
  };

  // @ts-ignore
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
              style={{width: 329, height: 250, marginTop: 12}}
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
