import {Reservation} from '../modules/statistic/types/StatisticTypes.ts';

export const db: {clubs: Reservation[]} = {
  clubs: [
    {
      id: '1',
      image: require('../assets/images/image/club/yaradiciliqGitar.jpeg'),
      date: '2024-03-15T00:00:00.000Z',
      name: 'Yaradıcılıq Klubu',
      datee: 'Ç, 3 mart, 2024, 12:00',
      bgColor: '#DBF3FF',
      progresColor: '#C2E3E8',
      color: '#5A5A5A',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        '"Yaradıcılıq" klubunda "Gitaraya Akkordla Başlayaq" adlı master-klass keçiriləcək.',
      text: '"Yaradıcılıq" klubunda "Gitaraya Akkordla Başlayaq" adlı master-klass keçiriləcək. Gitara aləti ilə ilk dəfə tanış olacaq gəncləri maraqlandıracaq bu təlimdə gitara alətinin tarixi və ilkin anlayışlar barədə danışılacaq.',
    },
    {
      id: '2',
      image: require('../assets/images/image/club/ferdiInksaf.jpeg'),
      date: '2024-03-10T00:00:00.000Z',
      name: 'Fərdi İnkişaf Klubu',
      datee: 'Ç, 4 mart, 2024, 15:00',
      bgColor: '#9EFFBE',
      progresColor: '#00FF55',
      color: '#000',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        'Vüsalə Mustafayeva və Nabat Hüseynzadə ilə "Təhsil turu: Universitet illərini dəyərləndirən yol axtarışı"',
      text: '"Fərdi İnkişaf" klubunda "ROOF Academic Training" şirkətinin Xaricdə təhsil şöbəsinin rəhbəri Vüsalə Mustafayeva və Əməliyyatlar üzrə rəhbəri Nabat Hüseynzadə ilə "Təhsil turu: Universitet illərini dəyərləndirən yol axtarışı" adlı təlimdə görüşəcəyik.Təlim zamanı xaricdə təhsil və gənclərin universitet illərini necə səmərəli keçirmələri ilə bağlı bir çox mövzulara toxunulacaq.🤓',
    },
    {
      id: '3',
      image: require('../assets/images/image/club/yaradiciliq.jpeg'),
      date: '2024-03-12T00:00:00.000Z',
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
  ],
};
